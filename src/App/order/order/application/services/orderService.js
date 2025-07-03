import CreateOrderDTO from "../DTO/createOrderDTO.js";
import UpdateOrderDTO from "../DTO/updateOrderDTO.js";
import CreateOrderUseCase from "../useCase/createOrderUseCase.js";
import DeleteOrderUseCase from "../useCase/deleteOrderUseCase.js";
import GetAllOrderUseCase from "../useCase/getAllOrderUseCase.js";
import GetOrderByIdUseCase from "../useCase/getOrderByIdUseCase.js";
import UpdateOrderUseCase from "../useCase/updateOrderUseCase.js";

class OrderService {
    async create(createOrderDTO = new CreateOrderDTO()) {
        const createOrderUseCase = new CreateOrderUseCase();
        return createOrderUseCase.execute(createOrderDTO);
    }
    async getById(orderId) {
        const getOrderByIdUseCase = new GetOrderByIdUseCase();
        return getOrderByIdUseCase.execute(orderId);
    }
    async update(updateOrderDTO = new UpdateOrderDTO()) {
        const updateOrderUseCase= new UpdateOrderUseCase();
        return updateOrderUseCase.execute(updateOrderDTO);
    }
    async getAll(searchText = '', page = 1, paginate = 10) {
        const getAllOrderUseCase = new GetAllOrderUseCase();
        return getAllOrderUseCase.execute(searchText, page, paginate);
    }

    async delete(orderId) {
        const deleteOrderUseCase = new DeleteOrderUseCase();
        return deleteOrderUseCase.execute(orderId);
    }
}

export default OrderService;