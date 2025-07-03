import { paginateAndSearch } from "../../../../../common/utils/paginateAndSearch.js";
import OrderRepository from "../../domain/repositories/orderRepository.js";

class GetAllOrderUseCase {
    constructor(orderRepository = new OrderRepository()) {
        this.orderRepository = orderRepository;
    }

    async execute(searchText = '', page = 1, paginate = 15) {
        return await paginateAndSearch({
            repository: this.orderRepository,
            searchText,
            page,
            paginate,
            searchField: 'name'
        });
    }
}

export default GetAllOrderUseCase;