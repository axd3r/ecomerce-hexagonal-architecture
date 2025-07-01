import { DataTypes } from "sequelize";
import sequelize from "../../../../../sequelize.config.js";
import User from "../../../users/domain/models/User.js";
import Product from "../../../products/domain/models/Products.js";

const Review = sequelize.define("Review", {
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
            key: "id",
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: "id",
        },
    },
    calification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Review