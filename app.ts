import express, { Express } from 'express';
import { PORT } from './config';
import routes from './routes';
import apiRoutes from './routes/api';
import { errorHandler, notFound } from './middleware/error-handler';
import nunjucks from 'nunjucks';
import path from 'path';
import { registerToConsul } from './consul';

const app: Express = express();

app.use(express.static(path.resolve(__dirname,'assets')));
app.use(express.static('styles'));
nunjucks.configure(path.resolve(__dirname,'views'),{
    express:app,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/api', apiRoutes);

app.use(errorHandler);
app.use(notFound);

registerToConsul();

app.listen(PORT, (): void => {
    console.log(`listening port ${PORT}`);
});
