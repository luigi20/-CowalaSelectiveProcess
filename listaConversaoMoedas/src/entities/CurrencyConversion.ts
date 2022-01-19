import { v4 as uuidv4 } from 'uuid';
export class CurrencyConversion {

    public readonly id: string; // preferi colocar como uuid do que colocar uma variável estática
    public moedaOriginal: string;
    public moedaDaConversao: string;
    public valorEnviado: number;
    public valorConvertido: number;

    constructor(props: Omit<CurrencyConversion, 'id'>, id?: string) {
        if (!id) {
            this.id = uuidv4();
        }
        Object.assign(this, props);
    }
}

