import { Request, Response } from 'express';
import { DeleteProductUseCase } from './DeleteProductUseCase';
export class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteProductUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await this.deleteProductUseCase.execute(id);
            return res.status(204).json();
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}