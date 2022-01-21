import { Router } from 'express';
import { FibonacciController } from './controllers/FibonnaciController';
import { FaxinaController } from './controllers/FaxinaController';
import { ClassificadorController } from './controllers/ClassificadorController';
import { ValidadorController } from './controllers/ValidadorController';
import { MolduraController } from './controllers/MolduraController';

const routes = Router();

routes.post('/fibonnaci', new FibonacciController().handle);
routes.post('/faxina', new FaxinaController().handle);
routes.post('/classificador', new ClassificadorController().handle);
routes.post('/validador', new ValidadorController().handle);
routes.post('/moldura', new MolduraController().handle);
export { routes };