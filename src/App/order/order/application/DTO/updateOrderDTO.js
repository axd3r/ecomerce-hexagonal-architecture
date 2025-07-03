class UpdateOrderDTO {
    constructor({orderId, userId, orderDate, status, total}) {
        this.orderId    = orderId,
        this.userId     = userId,
        this.orderDate  = orderDate,
        this.status     = status,
        this.total      = total,

        Object.freeze(this);
    }
}

export default UpdateOrderDTO;