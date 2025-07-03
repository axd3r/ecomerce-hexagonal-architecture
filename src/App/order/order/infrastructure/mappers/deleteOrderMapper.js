import GetOrderByIdDTO from "../../application/DTO/getOrderByIdDTO.js";
import DeleteOrderValidator from "../validators/deleteOrderValidator.js";

class DeleteOrderMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await DeleteOrderValidator.validate(this.request);
            
            return new GetOrderByIdDTO({
                orderId: this.request,
            });
        } catch (error) {
            throw error;
        }
    }
}

export default DeleteOrderMapper