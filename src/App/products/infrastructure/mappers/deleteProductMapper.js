import DeleteProductDTO from "../../application/DTO/deleteProductDTO.js";
import DeleteProductValidator from "../validators/deleteProductValidator.js";

export default class DeleteProductMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await DeleteProductValidator.validate(this.request);

            return new DeleteProductDTO({
                id: this.request,
            });
        } catch (error) {
            throw error;
        }
    }
}