import express from 'express';
import { asteroidHandler, roverFormHandler, roverHandler } from '../controllers/nasa-controller.js';
import { meteorsSchema, roverSchema } from '../validations/nasa-validation.js';
import { validateBody, validateQuery } from '../middleware/validation.js';

const router = express.Router();

router
    .get('/meteors', validateQuery(meteorsSchema), asteroidHandler)
    .get('/rover', roverFormHandler)
    .post('/rover', validateBody(roverSchema), roverHandler);

export default router;