import { Router } from 'express';
import { FibonacciController } from './controllers/FibonnaciController';
const routes = Router();

routes.post('/fibonnaci', new FibonacciController().handle);

export { routes };