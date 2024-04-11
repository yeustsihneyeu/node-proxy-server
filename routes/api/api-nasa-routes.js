import express from 'express';
import { getAsteroidsData } from '../../controllers/api-nasa-controller.js';
import { meteorsSchema } from '../../validations/nasa-validation.js';
import { validate } from '../../middleware/validation.js';

const router = express.Router();

router.get('/meteors', validate(meteorsSchema.query), getAsteroidsData);

export default router;