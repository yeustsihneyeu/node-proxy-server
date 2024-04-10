import express from 'express';
import { asteroidHandler } from '../controllers/nasa-controller.js';
import { meteorsSchema } from '../validations/nasa-validation.js';
import { validateQuery } from '../middleware/validation.js';

const router = express.Router();

router.get('/meteors', validateQuery(meteorsSchema), asteroidHandler);

export default router;