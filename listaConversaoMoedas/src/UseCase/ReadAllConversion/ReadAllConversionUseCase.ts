import { CurrencyConversionRepository } from "../../repositories/implementation/CurrencyConversionRepository";

export class ReadAllConversionUseCase {

    constructor(private currencyConversionRepository: CurrencyConversionRepository) { }

    async execute() {
        const listCurrencyConversion = await this.currencyConversionRepository.readAll();
        if (listCurrencyConversion.length === 0) {
            throw new Error('There are no recorded conversions');
        }
        return listCurrencyConversion;
    }
}