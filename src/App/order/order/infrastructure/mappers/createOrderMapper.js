import CreateOrderDTO from "../../application/DTO/createOrderDTO.js";
import CreateOrderValidator from "../validators/createOrderValidator.js";
import { OrderStatus } from "../../domain/models/Orders.js"; // ✅ Import necesario

class CreateOrderMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            console.log(this.request);

            await CreateOrderValidator.validate(this.request);

            return new CreateOrderDTO({
                userId: this.request.userId,
                orderDate: this.request.orderDate ? new Date(this.request.orderDate) : new Date(),
                status: this.request.status || OrderStatus.PENDING,
                total: this.request.total,
            });
        } catch (error) {
            throw error;
        }
    }
}

export default CreateOrderMapper;
