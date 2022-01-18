import { Request, Response } from "express";
import { ReadAllProductUseCase } from "./ReadAllProductUseCase";

export class ReadAllProductController {
    constructor(private readAllProductUseCase: ReadAllProductUseCase) {

    }
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const product = await this.readAllProductUseCase.execute();
            return res.json({ product });
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}