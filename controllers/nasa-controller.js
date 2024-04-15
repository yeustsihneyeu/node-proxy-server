import { getAsteroids } from '../client/nasa-client.js';
import { getRecentRoverPhoto, mapToResponse } from '../services/asteroid-service.js'

export const asteroidHandler = async (req, res, next) => {
    const { start_date, end_date, count, wereDangerousMeteors } = req.query;
    const params = { count, wereDangerousMeteors };

    getAsteroids(start_date, end_date)
        .then(({ data }) => mapToResponse(data, params))
        .then(response => res.status(200).render('meteor/index.html', { response: response }))
        .catch(err => next(err));
};

export const roverFormHandler = (req, res, next) => {
    res.status(200).render('rover/form.html');
};

export const roverHandler = (req, res, next) => {
    getRecentRoverPhoto(req.body)
        .then(response => res.status(200).render('rover/image-view.html', { img: response }))
        .catch(err => next(err));
};