import { IProductRepository } from '../../repositories/IProductRepository';

export class ReadAllProductUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute() {
        const product = await this.productRepository.readAll();
        if (!product) {
            throw new Error("Product Not Found");
        }
        return product;
    }
}