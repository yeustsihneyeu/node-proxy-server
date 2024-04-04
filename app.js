import express from 'express';
import { router as nasaRouter } from './routes/nasa-routes.js';

const app = express();
const PORT = process.env.PORT;

app.use(nasaRouter);

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});