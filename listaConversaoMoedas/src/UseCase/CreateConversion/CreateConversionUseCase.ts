import { IAwesomeAPI } from "../../providers/interfaces/IAwesomeAPI";
import { ICurrencyConversionRepository } from "../../repositories/interfaces/ICurrencyConversionRepository";

export class CreateConversionUseCase {
    constructor(private conversionDataAPI: IAwesomeAPI, private currencyConversionRepository: ICurrencyConversionRepository) { }

    async execute(initials: string, amountReceived: number) {
        const dataAPI = await this.conversionDataAPI.data(initials, amountReceived);
        const currencyConversion = await this.currencyConversionRepository.create(dataAPI);
        return currencyConversion;
    }
}