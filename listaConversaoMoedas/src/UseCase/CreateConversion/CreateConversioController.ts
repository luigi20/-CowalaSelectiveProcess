import { Request, Response } from 'express';
import { CreateConversionUseCase } from './CreateConversionUseCase';
export class CreateConversionController {

    constructor(private createConversionUseCase: CreateConversionUseCase) { }
    async handle(req: Request, res: Response) {
        const { initials } = req.body;
        try {
            const currencyConversion = await this.createConversionUseCase.execute(initials);
            return currencyConversion
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}
