import { IProductRepository } from "../../repositories/IProductRepository"
export class DeleteProductUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute(idProduto: string) {
        this.productRepository.delete(idProduto);
    }
}