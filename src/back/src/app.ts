import './config/config';
import express from 'express';
import routes from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import Logger from './utils/logger';
import morganMiddleware from './config/morganMiddleware';

global.fetch = require('node-fetch');

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morganMiddleware);

routes(app);

function startApp (port: number) {
  app
    .listen(port, () => {
      Logger.info(`Listening to port: ${port}`);
    })
    .on('error', () => {
      startApp(port + 1);
    });
}

startApp(<number>(process.env.PORT ?? 80));
