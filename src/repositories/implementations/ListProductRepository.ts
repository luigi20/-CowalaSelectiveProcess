import { IProductRepository } from '../IProductRepository';
import { Product } from '../../entities/Product';

export class ListProductRepository implements IProductRepository {

    private listProducts: Product[] = [];
    async create(product: Product): Promise<Product> {
        this.listProducts.push(product);
        return product;
    }

    async update(productUpdate: Product): Promise<Product> {
        const productAlreadyExists = this.readOne(productUpdate.id);
        if (!productAlreadyExists) {
            throw new Error("Product Not Found");
        }
        const index = this.listProducts.findIndex(product => product.id === productUpdate.id);
        this.listProducts[index] = productUpdate;
        return productUpdate;
    }

    async readAll(): Promise<Product[]> {
        console.log(this.listProducts);
        return this.listProducts;
    }

    async readOne(id: string): Promise<Product> {
        const product = this.listProducts.find(product => product.id === id);
        return product;
    }

    async delete(id: string): Promise<void> {
        const index = this.listProducts.findIndex(product => product.id === id);
        this.listProducts.splice(index, 1);
    }
}