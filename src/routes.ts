import { Router } from 'express';
import { createProductController } from './UseCases/CreateProduct';
import { deleteProductController } from './UseCases/DeleteProduct';
import { readAllProductController } from './UseCases/ReadAllProduct';
import { readOneProductController } from './UseCases/ReadOneProduct';
import { updateProductController } from './UseCases/UpdateProduct';
const routes = Router();

routes.post('/product', (req, res) => {
    return createProductController.handle(req, res);
});

routes.get('/product/all', (req, res) => {
    return readAllProductController.handle(req, res);
})

routes.get('/product/:id', (req, res) => {
    return readOneProductController.handle(req, res);
})

routes.delete('/product/:id', (req, res) => {
    return deleteProductController.handle(req, res);
})

routes.put('/product/:id', (req, res) => {
    return updateProductController.handle(req, res);
})

export { routes };