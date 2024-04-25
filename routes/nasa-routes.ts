import express, {Router} from 'express';
import { asteroidHandler, roverFormHandler, roverHandler } from '../controllers/nasa-controller';
import { meteorsSchema, roverSchema } from '../validations/nasa-validation';
import { validateBody, validateQuery } from '../middleware/validation';

const router: Router = express.Router();

router
    .get('/meteors', validateQuery(meteorsSchema), asteroidHandler)
    .get('/rover', roverFormHandler)
    .post('/rover', validateBody(roverSchema), roverHandler);

export default router;