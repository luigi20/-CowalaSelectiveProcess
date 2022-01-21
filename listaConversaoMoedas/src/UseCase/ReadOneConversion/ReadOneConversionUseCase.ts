import { ICurrencyConversionRepository } from "../../repositories/interfaces/ICurrencyConversionRepository";

export class ReadOneConversionUseCase {

    constructor(private currencyConversionRepository: ICurrencyConversionRepository) { }

    async execute(id: string) {
        const currencyConversion = await this.currencyConversionRepository.readOne(id);
        if (!currencyConversion) {
            throw new Error('Conversion not found');
        }
        return currencyConversion;
    }
}