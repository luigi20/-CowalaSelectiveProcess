import { ICurrencyConversionRepository } from "../../repositories/interfaces/ICurrencyConversionRepository";

export class DeleteConversionUseCase {
    constructor(private currencyConversionRepository: ICurrencyConversionRepository) { }
    async execute(id: string) {
        const index = await this.currencyConversionRepository.delete(id);
        if (index === -1) {
            throw new Error('Conversion Not Exists');
        }
        return index;
    }
}