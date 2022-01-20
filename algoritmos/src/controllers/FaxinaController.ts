import { Request, Response } from 'express';
import { Faxina } from '../services/Faxina';

class FaxinaController {
    async handle(req: Request, res: Response) {
        const { obj } = req.body;
        const faxinaObject = new Faxina();
        const result = await faxinaObject.execute(obj);
        return res.json(result);
    }
}

export { FaxinaController }