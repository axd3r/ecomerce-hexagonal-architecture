import { PaginatedResponse } from "../../../../../common/resource/paginatedResponse.js";

function GetAllOrderResponse(result) {
    return PaginatedResponse(result, order => ({
        id: order.id,
        userId: order.userId,
        orderDate: order.orderDate,
        status: order.status,
        total: order.total,
    }));
}

export default GetAllOrderResponse;