import { CurrencyConversionRepository } from '../../repositories/implementation/CurrencyConversionRepository';
import { DeleteConversionUseCase } from './DeleteConversionUseCase';
import { DeleteConversionController } from './DeleteConversionController';

const currencyConversionRepository = new CurrencyConversionRepository();
const deleteConversionUseCase = new DeleteConversionUseCase(currencyConversionRepository);
const deleteConversionController = new DeleteConversionController(deleteConversionUseCase);

export { deleteConversionUseCase, deleteConversionController }