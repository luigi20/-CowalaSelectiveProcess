import { ListProductRepository } from "../../repositories/implementations/ListProductRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const listProductRepository = new ListProductRepository();
const updateProductUseCase = new UpdateProductUseCase(listProductRepository);
const updateProductController = new UpdateProductController(updateProductUseCase);

export { updateProductUseCase, updateProductController }