import { Request, Response } from "express";
import { ReadOneProductUseCase } from "./ReadOneProductUseCase";

export class ReadOneProductController {
    constructor(private readOneProductUseCase: ReadOneProductUseCase) {

    }
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const product = await this.readOneProductUseCase.execute(id);
            return res.json(product);
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}