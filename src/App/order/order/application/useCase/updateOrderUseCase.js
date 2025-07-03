import Order from "../../domain/models/Orders.js";
import OrderRepository from "../../domain/repositories/orderRepository.js";
import UpdateOrderDTO from "../DTO/updateOrderDTO.js";

class UpdateOrderUseCase {
    constructor(orderRepository = new OrderRepository()) {
        this.orderRepository = orderRepository;
    }

    async execute(updateOrderDTO = new UpdateOrderDTO) {
        const order = new Order();

        order.id = updateOrderDTO.orderId
        order.userId = updateOrderDTO.userId;
        order.orderDate = updateOrderDTO.orderDate;
        order.status = updateOrderDTO.status;
        order.total = updateOrderDTO.total;

        const result = await this.orderRepository.update(order.dataValues.id, order.dataValues);

        if(result != false) {
            return result;
        }

        throw new Error('Error al actualizar el registro');
    }
}

export default UpdateOrderUseCase;