import { Router } from 'express';
import { createConversionController } from './UseCase/CreateConversion';
import { deleteConversionController } from './UseCase/DeleteConversion';

const routes = Router();

routes.post('/conversion', (req, res) => {
    return createConversionController.handle(req, res);
});
routes.delete('/conversion/:id', (req, res) => {
    return deleteConversionController.handle(req, res);
})

export { routes }