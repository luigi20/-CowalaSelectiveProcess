import { CurrencyConversion } from '../../entities/CurrencyConversion';
import { ICurrencyConversionDTO } from '../../UseCase/CreateConversion/ICurrencyConversionDTO'
export interface ICurrencyConversionRepository {

    create(currencyConversion: CurrencyConversion): Promise<ICurrencyConversionDTO>;
    /*  readAll(): Promise<CurrencyConversion[]>;
      readOne(id: string): Promise<CurrencyConversion>;
      delete(id: string): Promise<number>;*/
}