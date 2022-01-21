import { Request, Response } from 'express';
import { Validador } from '../services/Validador';

class ValidadorController {
    async handle(req: Request, res: Response) {
        const { data, validity } = req.body;
        const validator = new Validador();
        const result = await validator.execute(data, validity);
        return res.json(result);
    }
}

export { ValidadorController };