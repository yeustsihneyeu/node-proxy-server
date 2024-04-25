import { getAsteroids } from '../client/nasa-client';
import {getRecentRoverPhoto, mapToResponse, Params} from '../services/asteroid-service'
import { NextFunction, Request, Response } from "express";

export const asteroidHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {
        start_date,
        end_date,
        count,
        wereDangerousMeteors
    } = req.query;
    const params: Params = { count, wereDangerousMeteors };

    getAsteroids(start_date, end_date)
        .then(({ data }) => mapToResponse(data, params))
        .then(response => res.status(200).render('meteor/index.html', { response: response }))
        .catch(err => next(err));
};

export const roverFormHandler = (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).render('rover/form.html');
};

export const roverHandler = (req: Request, res: Response, next: NextFunction): void => {
    getRecentRoverPhoto(req.body)
        .then(response => res.status(200).render('rover/image-view.html', { img: response }))
        .catch(err => next(err));
};