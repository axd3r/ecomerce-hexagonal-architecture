class GetOrderByIdDTO {
    constructor({orderId}) {
        this.orderId = orderId;

        Object.freeze(this);
    }
}

export default GetOrderByIdDTO;