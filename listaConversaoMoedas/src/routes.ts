import { Router } from 'express';
import { createConversionController } from './UseCase/CreateConversion';
import { deleteConversionController } from './UseCase/DeleteConversion';
import { readAllConversionController } from './UseCase/ReadAllConversion';
import { readOneConversionController } from './UseCase/ReadOneConversion';

const routes = Router();

routes.post('/conversion', (req, res) => {
    return createConversionController.handle(req, res);
});
routes.delete('/conversion/:id', (req, res) => {
    return deleteConversionController.handle(req, res);
})
routes.get('/conversion/all', (req, res) => {
    return readAllConversionController.handle(req, res);
})
routes.get('/conversion/:id', (req, res) => {
    return readOneConversionController.handle(req, res);
})

export { routes }