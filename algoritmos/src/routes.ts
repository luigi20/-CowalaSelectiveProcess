import { Router } from 'express';
import { FibonacciController } from './controllers/FibonnaciController';
import { FaxinaController } from './controllers/FaxinaController';
import { ClassificadorController } from './controllers/ClassificadorController';

const routes = Router();

routes.post('/fibonnaci', new FibonacciController().handle);
routes.post('/faxina', new FaxinaController().handle);
routes.post('/classificador', new ClassificadorController().handle);

export { routes };