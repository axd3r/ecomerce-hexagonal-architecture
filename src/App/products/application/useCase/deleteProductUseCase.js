import { ProductRepository } from "../../domain/repositories/productRepository.js";

export default class DeleteProductUseCase {
    constructor(productRepository = new ProductRepository()) {
        this.productRepository = productRepository;
    }

    async execute(productId) {
        return await this.productRepository.delete(productId)
    }
}