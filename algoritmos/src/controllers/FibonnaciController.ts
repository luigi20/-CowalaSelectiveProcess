import { Request, Response } from 'express';
import { Fibonacci } from '../services/Fibonnaci';
import { Faxina } from '../services/Faxina';

class FibonacciController {
    async handle(req: Request, res: Response) {
        const { number } = req.body;
        const fibonnaci = new Fibonacci();
        const result = fibonnaci.execute(number);
        res.json(result);
    }
}

export { FibonacciController } 