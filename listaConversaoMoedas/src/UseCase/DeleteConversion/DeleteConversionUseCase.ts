import { CurrencyConversionRepository } from "../../repositories/implementation/CurrencyConversionRepository";

export class DeleteConversionUseCase {
    constructor(private currencyConversionRepository: CurrencyConversionRepository) { }
    async execute(id: string) {
        const index = await this.currencyConversionRepository.delete(id);
        if (index === -1) {
            throw new Error('Conversion Not Exists');
        }
        return index;
    }
}