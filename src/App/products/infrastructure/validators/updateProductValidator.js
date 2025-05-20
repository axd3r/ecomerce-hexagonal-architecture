import { Op } from "sequelize";
import Product from "../../domain/models/Products.js";

export default class UpdateProductValidator {
    static async validate(data) {
        await this.validateId(data.id);
        await this.validateUniqueName(data.name, data.id);
        this.validateOptionalFields(data);
    }

    static async validateId(productId) {
        const product = await Product.findByPk(productId);

        if (!product) {
            throw new Error("No se encontró el producto seleccionado");
        }
    }

    static validateName(name) {
        if (!name || name.length < 4) {
            throw new Error("El nombre debe tener al menos 4 caracteres");
        }
    }

    static async validateUniqueName(name, productId) {
        if (name) {
            this.validateName(name);

            const existingProduct = await Product.findOne({
                where: {
                    name,
                    id: { [Op.ne]: productId }
                }
            });

            if (existingProduct) {
                throw new Error("Este nombre de producto ya está en uso");
            }
        }
    }

    static validateOptionalFields(data) {
        if (data.description && data.description.length < 10) {
            throw new Error("La descripción debe tener al menos 10 caracteres");
        }

        if (data.price !== undefined && (isNaN(data.price) || data.price < 0)) {
            throw new Error("El precio debe ser un número positivo");
        }

        if (data.stock !== undefined && (!Number.isInteger(data.stock) || data.stock < 0)) {
            throw new Error("El stock debe ser un número entero positivo");
        }

        if (data.categoryId !== undefined && (!Number.isInteger(data.categoryId) || data.categoryId <= 0)) {
            throw new Error("El ID de categoría debe ser un número entero positivo");
        }
    }
}
