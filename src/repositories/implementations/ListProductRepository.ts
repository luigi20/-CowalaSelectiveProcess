import { IProductRepository } from '../IProductRepository';
import { Product } from '../../entities/Product';

export class ListProductRepository implements IProductRepository {

    private listProducts: Product[] = [];

    async create(product: Product): Promise<void> {
        this.listProducts.push(product);
    }

    async update(productUpdate: Product): Promise<void> {
        const productAlreadyExists = this.readOne(productUpdate.id);
        if (!productAlreadyExists) {
            throw new Error("Product Not Found");
        }
        const index = this.listProducts.findIndex(product => product.id === productUpdate.id);
        this.listProducts[index] = productUpdate;
    }

    async readAll(): Promise<Product[]> {
        return this.listProducts;
    }

    async readOne(id: string): Promise<Product> {
        const product = this.listProducts.find(product => product.id === id);
        return product;
    }

    async delete(id: string): Promise<void> {

    }
}