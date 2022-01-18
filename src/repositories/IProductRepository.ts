import { Product } from '../entities/Product';
export interface IProductRepository {

    create(product: Product): Promise<void>;
    update(product: Product): Promise<void>;
    readAll(): Promise<Product[]>;
    readOne(product: Product): Promise<Product>;
    delete(product: Product): Promise<void>;
}