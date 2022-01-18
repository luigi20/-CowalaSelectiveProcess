import { ICreateProductDTO } from '../CreateProduct/ICreateProductDTO';
import { IProductRepository } from "../../repositories/IProductRepository";
import { Product } from '../../entities/Product';


export class CreateProductUseCase {
    constructor(private productRepository: IProductRepository) {

    }
    async execute(data: ICreateProductDTO) {

        try {
            const product = new Product(data);
            await this.productRepository.save(product);
        } catch (err) {
            throw new Error("Product Not Saved");
        }
    }
}