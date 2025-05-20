import CreateProductDTO from "../DTO/createProductDTO.js";
import UpdateProductDTO from "../DTO/updateProductDTO.js";

import CreateProductUseCase from "../useCase/createProductUseCase.js";
import UpdateProductUseCase from "../useCase/updateProductUseCase.js";
import GetProductByIdUseCase from "../useCase/getProductByIdUseCase.js";
import GetAllProductUseCase from "../useCase/getAllProductUseCase.js";
import DeleteProductUseCase from "../useCase/deleteProductUseCase.js";

export default class ProductServices {

    async create(createProductDTO = new CreateProductDTO()) {
        const createProductUseCase = new CreateProductUseCase();
        return createProductUseCase.execute(createProductDTO);
    }

    async update(updateProductDTO = new UpdateProductDTO()) {
        const updateProductUseCase = new UpdateProductUseCase();
        return updateProductUseCase.execute(updateProductDTO);
    }

    async getById(productId) {
        const getProductByIdUseCase = new GetProductByIdUseCase();
        return getProductByIdUseCase.execute(productId);
    }

    async getAll(searchText = "", page = 1, paginate = 10) {
        const getAllProductUseCase = new GetAllProductUseCase();
        return getAllProductUseCase.execute(searchText, page, paginate);
    }

    async delete(productId) {
        const deleteProductUseCase = new DeleteProductUseCase();
        return deleteProductUseCase.execute(productId);
    }
}
