import { ProductRepository } from "../../domain/repositories/productRepository.js";

export default class GetProductByIdUseCase {
    constructor(productRepository = new ProductRepository()) {
        this.productRepository = productRepository;
    }

    async execute(productId) {
        return await this.productRepository.getById(productId)
    }
}