import User from "../../../../users/domain/models/User.js";
import { OrderStatus } from "../../domain/models/Orders.js";

class CreateOrderValidator {
    static async validate(data) {
        await this.validateUser(data.userId);
        this.validateOrderDate(data.orderDate);
        this.validateStatus(data.status);
        this.validateTotal(data.total);
    }

    static async validateUser(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('El usuario no se encuentra registrado');
        }
    }

    static validateOrderDate(orderDate) {
        if (!orderDate) return;

        const date = new Date(orderDate);
        if (isNaN(date.getTime())) {
            throw new Error('La fecha del pedido no es válida');
        }
        const now = new Date();
        if (date > now) {
            throw new Error('La fecha del pedido no puede ser en el futuro');
        }
    }

    static validateStatus(status) {
        if (!status) return;

        const validStatuses = Object.values(OrderStatus);
        if (!validStatuses.includes(status)) {
            throw new Error(`Estado inválido. Debe ser uno de: ${validStatuses.join(', ')}`);
        }
    }

    static validateTotal(total) {
        if (typeof total !== 'number' || total <= 0) {
            throw new Error('El total del pedido debe ser un número mayor que 0');
        }
    }
}

export default CreateOrderValidator;
