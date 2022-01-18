import { IProductRepository } from '../../repositories/IProductRepository';

export class ReadAllProductUseCase {

    constructor(private productRepository: IProductRepository) { }

    async execute() {
        const product = await this.productRepository.readAll();
        if (product.length === 0) {
            throw new Error("There Are No Registered Products");
        }
        return product;
    }
}