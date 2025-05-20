import CreateProductDTO from "../../application/DTO/createProductDTO.js";
import CreateProductValidator from "../validators/createProductValdiator.js";

export default class CreateProductMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await CreateProductValidator.validate(this.request);

            return new CreateProductDTO({
                name: this.request.name,
                description: this.request.description,
                price: this.request.price,
                stock: this.request.stock,
                categoryId: this.request.categoryId,
            })
        } catch (error) {
            throw error
        }
    }
}