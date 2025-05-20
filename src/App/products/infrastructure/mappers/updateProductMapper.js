import UpdateProductDTO from "../../application/DTO/updateProductDTO.js";
import UpdateProductValidator from "../validators/updateProductValidator.js";

export default class UpdateProductMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await UpdateProductValidator.validate(this.request);

            return new UpdateProductDTO({
                id: this.request.id,
                name: this.request.name,
                description: this.request.description,
                price: this.request.price,
                stock: this.request.stock,
                categoryId: this.request.categoryId,
            })
        } catch (error) {
            
        }
    }
}