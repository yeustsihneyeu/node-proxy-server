import express from 'express';
import { asteroidHandler, roverHandler } from '../../controllers/api-nasa-controller.js';
import { meteorsSchema, roverSchema } from '../../validations/nasa-validation.js';
import { validateQuery, validateBody } from '../../middleware/validation.js';

const router = express.Router();

router
    .get('/meteors', validateQuery(meteorsSchema), asteroidHandler)
    .post('/rover', validateBody(roverSchema), roverHandler);

export default router;