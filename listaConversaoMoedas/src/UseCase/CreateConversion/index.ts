import { AwesomeApi } from '../../providers/implementations/AwesomeAPI';
import { CreateConversionController } from './CreateConversionController';
import { CreateConversionUseCase } from './CreateConversionUseCase';
import { CurrencyConversionRepository } from '../../repositories/implementation/CurrencyConversionRepository';

const currencyConversionRepository = new CurrencyConversionRepository();
const awesomeAPI = new AwesomeApi();
const createConversionUseCase = new CreateConversionUseCase(awesomeAPI, currencyConversionRepository);
const createConversionController = new CreateConversionController(createConversionUseCase);

export { createConversionUseCase, createConversionController }