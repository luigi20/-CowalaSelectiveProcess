import { Request, Response } from 'express';
import { UpdateProductUseCase } from '../UpdateProduct/UpdateProductUseCase';

export class UpdateProductController {
    constructor(private updateProductUseCase: UpdateProductUseCase) {

    }
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { item, preco } = req.body;
        try {
            const product = await this.updateProductUseCase.execute({ id, item, preco });
            return res.json(product);
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }

    }
}