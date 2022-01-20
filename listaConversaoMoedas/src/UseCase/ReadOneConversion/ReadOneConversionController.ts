import { ReadOneConversionUseCase } from './ReadOneConversionUseCase';
import { Request, Response } from 'express';

export class ReadOneConversionController {

    constructor(private readOneConversionUseCase: ReadOneConversionUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const currencyConversion = await this.readOneConversionUseCase.execute(id);
            return res.status(200).json(currencyConversion);
        } catch (err) {
            return res.status(400).json({ error: err.message || "Unexpected Error" });
        }
    }
}