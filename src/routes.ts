import { Router } from 'express';
import { createProductController } from './UseCases/CreateProduct';
import { readAllProductController } from './UseCases/ReadAllProduct';
const routes = Router();

routes.post('/product', (req, res) => {
    return createProductController.handle(req, res);
});

routes.get('/products/all', (req, res) => {
    return readAllProductController.handle(req, res);
})

export { routes };