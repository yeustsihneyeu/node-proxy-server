import express from 'express';
import { router as nasaRouter } from './routes/nasa-routes.js';
import { errorHandler, notFound } from "./middleware/error-handler.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(nasaRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});