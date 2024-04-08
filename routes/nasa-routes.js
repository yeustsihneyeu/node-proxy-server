import express from 'express';
import { getAsteroidsData } from '../controllers/nasa-controller.js';

export const router = express.Router();

router.get('/meteors', getAsteroidsData);