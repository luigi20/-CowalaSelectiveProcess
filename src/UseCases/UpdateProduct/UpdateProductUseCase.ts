import { IUpdateProductDTO } from '../UpdateProduct/IUpdateProductDTO';
import { IProductRepository } from "../../repositories/IProductRepository";
import { Product } from '../../entities/Product';


export class UpdateProductUseCase {
    constructor(private productRepository: IProductRepository) {

    }
    async execute(data: IUpdateProductDTO) {

        try {
            const product = new Product(data);
            const updateProduct = await this.productRepository.update(product);
            return updateProduct;
        } catch (err) {
            throw new Error("Product Not Updated");
        }
    }
}