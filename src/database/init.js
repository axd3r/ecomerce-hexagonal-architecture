import sequelize from "../../sequelize.config.js";
import User from "../App/users/domain/models/User.js";
import Role from "../App/role/domain/models/Role.js";
import Product from "../App/products/domain/models/Products.js";
import Category from "../App/category/domain/models/Category.js";
//const { Product, Category } from ("../config/models/initRelations");

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");
    
    await sequelize.sync({ alter: true });
    console.log("Base de datos sincronizada.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

export default syncDatabase