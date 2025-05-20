import Product from "../../domain/models/Products.js";
import { ProductRepository } from "../../domain/repositories/productRepository.js";
import UpdateProductDTO from "../DTO/updateProductDTO.js";

export default class UpdareProductUseCase {
    constructor(productRepository = new ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(updateProductDTO = new UpdateProductDTO) {
        const product = new Product();
        
        product.id = updateProductDTO.id;
        product.name = updateProductDTO.name;
        product.description = updateProductDTO.description;
        product.price = updateProductDTO.price;
        product.stock = updateProductDTO.stock;
        product.categoryId = updateProductDTO.categoryId;

        const result = await this.productRepository.update(product.dataValues.id, product.dataValues);

        if ( result != false) {
            return result;
        }

        throw new Error('Error al actualizar el producto');
    }
}