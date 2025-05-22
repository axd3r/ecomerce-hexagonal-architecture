import Product from "../../domain/models/Products.js";
import { ProductRepository } from "../../domain/repositories/productRepository.js";
import CreateProductDTO from "../DTO/createProductDTO.js";

export default class CreateProductUseCase {
    constructor(productRepository = new ProductRepository()){
        this.productRepository = productRepository;
    }

    async execute(createProductDTO = new CreateProductDTO) {
        const productM = new Product();

        productM.name = createProductDTO.name;
        productM.description = createProductDTO.description;
        productM.price = createProductDTO.price;
        productM.stock = createProductDTO.stock;
        productM.categoryId = createProductDTO.categoryId;
        const result = await this.productRepository.create(productM.dataValues);

        if ( result != false ) {
            return result
        }

        throw new Error('Error al crear el producto');
    }
}