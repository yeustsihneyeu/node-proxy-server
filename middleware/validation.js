const validationOptions = {
    abortEarly: false,
    allowUnknown: true,
}

export const validateQuery = (schema) => (req, res, next) => {
    if (schema.query) {
        const { error, value } = schema.query.validate(req.query, validationOptions);
        if (error) throw { status: 400, message: error.message };
        req.query = value;
    }

    return next();
}

export const validateBody= (schema) => (req, res, next) => {
    if (schema.body) {
        const { error, value } = schema.body.validate(req.body, validationOptions);
        if (error) throw { status: 400, message: error.message };
        req.body = value;
    }

    return next();
}