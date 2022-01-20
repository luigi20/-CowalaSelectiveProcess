import { IProductRepository } from '../../repositories/IProductRepository';

export class ReadAllProductUseCase {

    constructor(private productRepository: IProductRepository) { }

    async execute() {
        const listProduct = await this.productRepository.readAll();
        if (listProduct.length === 0) {
            throw new Error("There Are No Registered Products");
        }
        return listProduct;
    }
}