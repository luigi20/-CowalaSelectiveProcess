
import { IAwesomeAPI } from '../interfaces/IAwesomeAPI';
import axios from 'axios';
import { ICurrencyConversionDTO } from '../../UseCase/CreateConversion/ICurrencyConversionDTO';
import { CurrencyConversion } from '../../entities/CurrencyConversion';

export class AwesomeApi implements IAwesomeAPI {

    async data(initials: string, amountReceived: number): Promise<CurrencyConversion> {

        let dataCurrencyConversion: ICurrencyConversionDTO;
        try {
            const { data } = await axios.get(`https://economia.awesomeapi.com.br/last/${initials}`);
            const initialsVector = new Array(initials.replace('-', ''));
            for (let i = 0; i < initialsVector.length; i++) {
                let { code, codein, ask } = data[initialsVector[i]];
                dataCurrencyConversion = {
                    moedaOriginal: code,
                    moedaDaConversao: codein,
                    valorEnviado: amountReceived,
                    valorConvertido: ask * amountReceived
                }
            }
        } catch (err) {
            throw new Error("The conversion did not take place. Check currency abbreviations");
        }
        const currencyConversion = new CurrencyConversion(dataCurrencyConversion);
        return currencyConversion;
    }
}