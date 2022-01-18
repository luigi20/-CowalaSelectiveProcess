import { ListProductRepository } from "../../repositories/implementations/ListProductRepository";
import { ReadOneProductController } from "./ReadOneProductController";
import { ReadOneProductUseCase } from "./ReadOneProductUseCase";

const listProductRepository = new ListProductRepository();
const readOneProductUseCase = new ReadOneProductUseCase(listProductRepository);
const readOneProductController = new ReadOneProductController(readOneProductUseCase);

export { readOneProductUseCase, readOneProductController }