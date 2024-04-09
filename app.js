import express from 'express';
import { PORT, SERVICE_NAME } from './config.js';
import routes from './routes/index.js';
import apiRoutes from './routes/api/index.js';
import { errorHandler, notFound } from "./middleware/error-handler.js";
import nunjucks from "nunjucks";
import path from 'path';
import { fileURLToPath } from 'url';
import { registerToConsul } from './consul.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname,'assets')));
app.use(express.static('styles'));
nunjucks.configure(path.resolve(__dirname,'views'),{
    express:app,
    autoscape:true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/api', apiRoutes);

app.use(errorHandler);
app.use(notFound);

registerToConsul({ name: SERVICE_NAME, port: Number(PORT) });

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});
