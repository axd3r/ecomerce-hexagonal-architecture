import GetProductByIdDTO from "../../application/DTO/getProductByIdDTO.js";
import GetProductByIdValidator from "../validators/getProductByIdValidator.js";

export default class GetProductByIdMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await GetProductByIdValidator.validate(this.request);

            return new GetProductByIdDTO({
                id: this.request,
            });
        } catch (error) {
            throw error;
        }
    }
}