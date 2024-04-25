import express, { Router } from 'express';
import apiNasaRouter  from './api-nasa-routes';


const router: Router = express.Router();

router
    .use(apiNasaRouter);

export default router;