import { Request, Response } from 'express';
import { Classificador } from '../services/Classificador';

class ClassificadorController {
    async handle(req: Request, res: Response) {
        const listObject = req.body;
        const classificador = new Classificador();
        const result = await classificador.execute(listObject);
        return res.json(result);
    }
}

export { ClassificadorController };