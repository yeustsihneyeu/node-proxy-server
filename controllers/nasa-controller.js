import { getAsteroids } from '../client/nasa-client.js';
import { mapToAsteroids } from '../helpers/asteroid-mapper.js'

const handleError = (res, error) => {
    console.log(error);
    res.status(404).send(error.message);
};

export const getAsteroidsData = (req, res) => {
    getAsteroids(req.query.start_date, req.query.end_date)
        .then(({ data }) => mapToAsteroids(data))
        .then(asteroids => res.status(200).send(asteroids))
        .catch(err => handleError(res, err));
};