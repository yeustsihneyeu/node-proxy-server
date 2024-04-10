import { getAsteroids } from '../client/nasa-client.js';
import { mapToResponse } from '../services/asteroid-service.js'

export const asteroidHandler = async (req, res, next) => {
    const { start_date, end_date, count, wereDangerousMeteors } = req.query;
    const params = { count, wereDangerousMeteors };

    getAsteroids(start_date, end_date)
        .then(({ data }) => mapToResponse(data, params))
        .then(response => res.status(200).render('meteor/index.html', { response: response }))
        .catch(err => next(err));
};