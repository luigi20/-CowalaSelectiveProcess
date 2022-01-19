import { Router } from 'express';
import { createConversionController } from './UseCase/CreateConversion';

const routes = Router();

routes.post('/conversion', (req, res) => {
    return createConversionController.handle(req, res);
});

export { routes }