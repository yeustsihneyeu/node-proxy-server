import express from 'express';
import systemRouter  from './system-routes.js';
import nasaRouter  from './nasa-routes.js';


const router = express.Router();

router
    .use(systemRouter)
    .use(nasaRouter);

export default router;