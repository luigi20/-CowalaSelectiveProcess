import { Request, Response } from 'express';
import { DeleteConversionUseCase } from './DeleteConversionUseCase';
export class DeleteConversionController {

    constructor(private deleteConversionUseCase: DeleteConversionUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await this.deleteConversionUseCase.execute(id);
            res.status(204).json();
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}