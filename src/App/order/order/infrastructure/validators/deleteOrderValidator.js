import Order from "../../domain/models/Orders.js";

class DeleteOrderValidator {
    static async validate(data) {
        await this.validateOrder(data);
    }

    static async validateOrder(orderId) {
        const order = await Order.findByPk(orderId);
        if (!order) {
            throw new Error('El ID de esta orden no existe');
        }
    }
}

export default DeleteOrderValidator;
