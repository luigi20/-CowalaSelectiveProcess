import { CurrencyConversion } from "../../entities/CurrencyConversion";

export interface IAwesomeAPI {
    data(initials: string, amountReceived: number): Promise<CurrencyConversion>;
}