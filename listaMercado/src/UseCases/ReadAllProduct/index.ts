import { ListProductRepository } from "../../repositories/implementations/ListProductRepository";
import { ReadAllProductController } from "./ReadAllProductController";
import { ReadAllProductUseCase } from "./ReadAllProductUseCase";

const listProductRepository = new ListProductRepository();
const readAllProductUseCase = new ReadAllProductUseCase(listProductRepository);
const readAllProductController = new ReadAllProductController(readAllProductUseCase);

export { readAllProductUseCase, readAllProductController }