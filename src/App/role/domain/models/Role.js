import { DataTypes } from "sequelize";
import sequelize from "../../../../../sequelize.config.js";

const Role = sequelize.define("Role", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
  tableName: "roles",
  timestamps: true,
});

export default Role;