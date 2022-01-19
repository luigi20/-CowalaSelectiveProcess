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
}