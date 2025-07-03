import { DataTypes } from "sequelize";
import sequelize from "../../../../../../sequelize.config.js";
import User from "../../../../users/domain/models/User.js";

export const OrderStatus = {
    PENDING: 'pendiente',
    PROCESSING: 'procesando',
    SHIPPED: 'enviado',
    DELIVERED: 'entregado',
    CANCELLED: 'cancelado',
};

const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.ENUM(...Object.values(OrderStatus)),
        allowNull: false,
        defaultValue: OrderStatus.PENDING,
    },

    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Order;