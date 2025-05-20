import { DataTypes } from "sequelize";
import sequelize from "../../../../../sequelize.config";
import User from "../../../users/domain/models/User";

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
    city: {

    }
    
})