import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/health', (req, res): void => {
    res.status(200).json({ status: 'UP' });
});

export default router;