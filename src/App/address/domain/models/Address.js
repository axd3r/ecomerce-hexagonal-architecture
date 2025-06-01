import { DataTypes } from "sequelize";
import sequelize from "../../../../../sequelize.config.js";
import User from "../../../users/domain/models/User.js";

const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: true
    },
    province: {
        type: DataTypes.STRING,
        allowNull: true
    },
    district: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Address;