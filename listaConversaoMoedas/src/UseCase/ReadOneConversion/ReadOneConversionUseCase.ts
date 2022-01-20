import { CurrencyConversionRepository } from "../../repositories/implementation/CurrencyConversionRepository";

export class ReadOneConversionUseCase {

    constructor(private currencyConversionRepository: CurrencyConversionRepository) { }

    async execute(id: string) {
        const currencyConversion = await this.currencyConversionRepository.readOne(id);
        if (!currencyConversion) {
            throw new Error('Conversion not found');
        }
        return currencyConversion;
    }
}