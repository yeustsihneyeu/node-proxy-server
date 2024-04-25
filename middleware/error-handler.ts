import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    res.status(err.status || 500).json(err.message);
};

export const notFound = (req: Request, res: Response): void => {
    res.status(200).render('not-found-page.html');
};