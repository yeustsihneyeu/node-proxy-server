import { getAsteroids } from '../client/nasa-client.js';
import { mapToAsteroids } from '../helpers/asteroid-mapper.js'

export const getAsteroidsData = (req, res, next) => {
    getAsteroids(req.query.start_date, req.query.end_date)
        .then(({ data }) => mapToAsteroids(data))
        .then(asteroids => res.status(200).send(asteroids))
        .catch(err => next(err));
};