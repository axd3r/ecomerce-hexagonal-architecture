class UpdateOrderResponse {
    constructor(order) {
        this.id = order.id;
        this.userId = order.userId;
        this.orderDate = order.orderDate;
        this.status = order.status;
        this.total = order.total;
    }
}

export default UpdateOrderResponse;