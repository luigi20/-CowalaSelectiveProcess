import { ICurrencyConversionRepository } from '../interfaces/ICurrencyConversionRepository';
import { CurrencyConversion } from '../../entities/CurrencyConversion';
import { ICurrencyConversionDTO } from '../../UseCase/CreateConversion/ICurrencyConversionDTO';

export class CurrencyConversionRepository implements ICurrencyConversionRepository {

    private static listCurrencyConversion: CurrencyConversion[] = [];
    //utilizando lista estática para persistência dos dados

    async create(currencyConversion: CurrencyConversion): Promise<ICurrencyConversionDTO> {
        CurrencyConversionRepository.listCurrencyConversion.push(currencyConversion);
        return currencyConversion;
    }

    async readAll(): Promise<CurrencyConversion[]> {
        return CurrencyConversionRepository.listCurrencyConversion;
    }

    async readOne(id: string): Promise<CurrencyConversion> {
        const currencyConversion = CurrencyConversionRepository.listCurrencyConversion.find(conversion => conversion.id === id);
        return currencyConversion;
    }

    async delete(id: string): Promise<number> {
        const index = CurrencyConversionRepository.listCurrencyConversion.findIndex(conversion => conversion.id === id);
        if (index !== -1) {
            CurrencyConversionRepository.listCurrencyConversion.splice(index, 1);
        }
        return index;
    }
}