import { ReadOneConversionUseCase } from "./ReadOneConversionUseCase";
import { ReadOneConversionController } from "./ReadOneConversionController";
import { CurrencyConversionRepository } from "../../repositories/implementation/CurrencyConversionRepository";

const currencyConversionRepository = new CurrencyConversionRepository();
const readOneConversionUseCase = new ReadOneConversionUseCase(currencyConversionRepository);
const readOneConversionController = new ReadOneConversionController(readOneConversionUseCase);

export { readOneConversionUseCase, readOneConversionController }



