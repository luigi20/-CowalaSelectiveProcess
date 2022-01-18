import { v4 as uuidv4 } from 'uuid';

export class Product {
    public readonly id: string;
    public item: string;
    public preco: number;

    constructor(props: Omit<Product, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuidv4();
        }
    }
}