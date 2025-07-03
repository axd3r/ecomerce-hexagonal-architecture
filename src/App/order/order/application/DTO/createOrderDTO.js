class CreateOrderDTO {
    constructor({userId, orderDate, status, total}) {
        this.userId     = userId,
        this.orderDate  = orderDate,
        this.status     = status,
        this.total      = total,

        Object.freeze(this);
    }
}

export default CreateOrderDTO;