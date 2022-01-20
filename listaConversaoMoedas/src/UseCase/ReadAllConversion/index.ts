import { ReadAllConversionController } from './ReadAllConversionController';
import { ReadAllConversionUseCase } from './ReadAllConversionUseCase';
import { CurrencyConversionRepository } from '../../repositories/implementation/CurrencyConversionRepository';

const currencyConversionRepository = new CurrencyConversionRepository();
const readAllConversionUseCase = new ReadAllConversionUseCase(currencyConversionRepository);
const readAllConversionController = new ReadAllConversionController(readAllConversionUseCase);

export { readAllConversionUseCase, readAllConversionController };
