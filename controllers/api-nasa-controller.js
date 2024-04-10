import { getAsteroids } from '../client/nasa-client.js';
import { mapToResponse, getRecentRoverPhoto } from '../services/asteroid-service.js'

export const asteroidHandler = async (req, res, next) => {
    const { start_date, end_date, count, wereDangerousMeteors } = req.query;
    const params = { count, wereDangerousMeteors };

    getAsteroids(start_date, end_date)
        .then(({ data }) => mapToResponse(data, params))
        .then(response => res.status(200).json(response))
        .catch(err => next(err));
}

export const roverHandler = async (req, res, next) => {
    getRecentRoverPhoto(req.body)
        .then(response => res.status(200).json(response))
        .catch(err => next(err));
}