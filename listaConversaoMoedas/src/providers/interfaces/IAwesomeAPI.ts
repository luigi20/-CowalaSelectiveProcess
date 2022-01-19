import { CurrencyConversion } from "../../entities/CurrencyConversion";

export interface IAwesomeAPIData {

    code: string;
    codein: string;
    bid: number;
}

export interface IAwesomeAPI {

    create(currencyConversion: CurrencyConversion): Promise<CurrencyConversion>;
    readAll(): Promise<CurrencyConversion[]>;
    readOne(id: string): Promise<CurrencyConversion>;
    delete(id: string): Promise<number>;

}