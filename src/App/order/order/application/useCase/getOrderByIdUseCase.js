import OrderRepository from "../../domain/repositories/orderRepository.js";

class GetOrderByIdUseCase {
    constructor(orderRepository = new OrderRepository()) {
        this.orderRepository = orderRepository;
    }

    async execute(oderId) {
        return await this.orderRepository.getById(oderId);
    }
}

export default GetOrderByIdUseCase;