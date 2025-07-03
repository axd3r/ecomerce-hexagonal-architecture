import UpdateOrderDTO from "../../application/DTO/updateOrderDTO.js";
import UpdateOrderValidator from "../validators/updateOrderValidator.js";

class UpdateOrderMapper {
    constructor(requesBody) {
        this.request = requesBody;
    }

    async fromRequest() {
        try {
            await UpdateOrderValidator.validate(this.request);

            return new UpdateOrderDTO({
                orderId: this.request.orderId,
                userId: this.request.userId,
                orderDate: this.request.orderDate ? new Date(this.request.orderDate) : new Date(),
                status: this.request.status,
                total: this.request.total,
            });
        } catch (error) {
            throw error
        }
    }
}

export default UpdateOrderMapper;