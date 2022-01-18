import { Product } from '../entities/Product';
export interface IProductRepository {

    create(product: Product): Promise<void>;
    update(productUpdate: Product): Promise<void>;
    readAll(): Promise<Product[]>;
    readOne(id: string): Promise<Product>;
    delete(id: string): Promise<void>;
}