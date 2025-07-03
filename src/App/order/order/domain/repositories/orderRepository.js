import Order from "../models/Orders.js";

class OrderRepository {
    async create(orderData) {
        const order = await Order.create(orderData);
        return order;
    }

    async getAll(options = {}) {
        return await Order.findAndCountAll(options);
    }

    async getById(orderId) {
        const order = await Order.findByPk(orderId);
        return order;
    }

    async update(orderId, orderData) {
        const order = await this.getById(orderId);
        await order.update(orderData);
        return order;
    }

    async delete(orderId) {
        const order = await this.getById(orderId);
        await order.destroy();
        return {message: 'Registro Eliminado con exito'}
    }
}

export default OrderRepository;