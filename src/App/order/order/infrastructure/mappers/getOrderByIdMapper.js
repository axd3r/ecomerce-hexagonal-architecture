import GetOrderByIdDTO from "../../application/DTO/getOrderByIdDTO.js";
import UpdateOrderValidator from "../validators/updateOrderValidator.js";

class GetOrderByIdMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await UpdateOrderValidator.validate(this.request);
            
            return new GetOrderByIdDTO({
                orderId: this.request,
            });
        } catch (error) {
            throw error;
        }
    }
}

export default GetOrderByIdMapper