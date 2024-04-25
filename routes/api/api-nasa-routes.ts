import express, {Router} from 'express';
import { asteroidHandler, roverHandler } from '../../controllers/api-nasa-controller';
import { meteorsSchema, roverSchema } from '../../validations/nasa-validation';
import { validateQuery, validateBody } from '../../middleware/validation';

const router: Router = express.Router();

router
    .get('/meteors', validateQuery(meteorsSchema), asteroidHandler)
    .post('/rover', validateBody(roverSchema), roverHandler);

export default router;