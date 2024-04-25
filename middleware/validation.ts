import { Request, Response, NextFunction } from "express";
import { Schema } from "../validations/schema";

const validationOptions: { abortEarly: boolean, allowUnknown: boolean } = {
    abortEarly: false,
    allowUnknown: true,
}

export const validateQuery = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    if (schema.query) {
        const { error, value } = schema.query.validate(req.query, validationOptions);
        if (error) throw { status: 400, message: error.message };
        req.query = value;
    }

    return next();
}

export const validateBody= (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    if (schema.body) {
        const { error, value } = schema.body.validate(req.body, validationOptions);
        if (error) throw { status: 400, message: error.message };
        req.body = value;
    }

    return next();
}