import { IProductRepository } from '../../repositories/IProductRepository';

export class ReadOneProductUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute(idProduto: string) {

        const product = await this.productRepository.readOne(idProduto);
        if (!product) {
            throw new Error("Product Not Found");
        }
        return product;
    }
}