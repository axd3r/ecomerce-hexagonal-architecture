import Order from "../../domain/models/Orders.js";
import OrderRepository from "../../domain/repositories/orderRepository.js";
import CreateOrderDTO from "../DTO/createOrderDTO.js";

class CreateOrderUseCase {
    constructor(orderRepository = new OrderRepository()) {
        this.orderRepository = orderRepository;
    }

    async execute(createOrderDTO = new CreateOrderDTO) {
        const order = new Order();

        order.userId = createOrderDTO.userId;
        order.orderDate = createOrderDTO.orderDate;
        order.status = createOrderDTO.status;
        order.total = createOrderDTO.total;

        const result = await this.orderRepository.create(order.dataValues);

        if(result != false) {
            return result;
        }

        throw new Error('Error al guardar el registro');
    }
}

export default CreateOrderUseCase;