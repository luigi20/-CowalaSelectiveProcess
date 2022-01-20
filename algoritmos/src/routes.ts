import { Router } from 'express';
import { FibonacciController } from './controllers/FibonnaciController';
import { FaxinaController } from './controllers/FaxinaController';

const routes = Router();

routes.post('/fibonnaci', new FibonacciController().handle);
routes.post('/faxina', new FaxinaController().handle);

export { routes };