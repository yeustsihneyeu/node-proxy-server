import express, { Router } from 'express';
import systemRouter  from './system-routes';
import nasaRouter  from './nasa-routes';


const router: Router = express.Router();

router
    .use(systemRouter)
    .use(nasaRouter);

export default router;