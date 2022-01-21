import { ICurrencyConversionRepository } from "../../repositories/interfaces/ICurrencyConversionRepository";

export class ReadAllConversionUseCase {

    constructor(private currencyConversionRepository: ICurrencyConversionRepository) { }

    async execute() {
        const listCurrencyConversion = await this.currencyConversionRepository.readAll();
        if (listCurrencyConversion.length === 0) {
            throw new Error('There are no recorded conversions');
        }
        return listCurrencyConversion;
    }
}