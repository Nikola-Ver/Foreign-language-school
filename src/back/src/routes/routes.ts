import { Express, NextFunction, Response, Request } from 'express';
import Logger from '../utils/logger';

export default (app: Express): void => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    Logger.error(`${err.name}: ${err.message}`);
    res.status(500).send({ err });
  });
};
