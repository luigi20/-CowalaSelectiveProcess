import { Request, Response } from 'express';
import { Faxina } from '../services/Faxina';

class FaxinaController {
    async handle(req: Request, res: Response) {
        const object = req.body;
        const faxinaObject = new Faxina();
        const result = await faxinaObject.execute(object);
        return res.json(result);
    }
}

export { FaxinaController }