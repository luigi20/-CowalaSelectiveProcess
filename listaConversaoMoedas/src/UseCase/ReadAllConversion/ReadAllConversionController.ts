import { Request, Response } from 'express';
import { ReadAllConversionUseCase } from './ReadAllConversionUseCase'

export class ReadAllConversionController {

    constructor(private currencyConversionUseCase: ReadAllConversionUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const listCurrencyConversion = await this.currencyConversionUseCase.execute();
            return res.status(200).json(listCurrencyConversion);
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}