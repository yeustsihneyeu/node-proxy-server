import { getAsteroids } from '../client/nasa-client';
import {mapToResponse, getRecentRoverPhoto, Params} from '../services/asteroid-service'
import { Request, Response, NextFunction } from "express";


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
        .then(response => res.status(200).json(response))
        .catch(err => next(err));
}

export const roverHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    getRecentRoverPhoto(req.body)
        .then((response: string) => res.status(200).json(response))
        .catch((err) => next(err));
}