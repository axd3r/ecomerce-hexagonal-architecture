import Product from "../../domain/models/Products.js";

export default class CreateProductValidator {
    static async validate(data) {
        this.validateName(data.name);
        this.validateDescription(data.description);
        this.validatePrice(data.price);
        this.validateStock(data.stock);
        this.validateCategoryId(data.categoryId);
        await this.validateUniqueName(data.name);
    }

    static validateName(name) {
        if (!name || name.length < 4) {
            throw new Error("El nombre debe tener al menos 4 caracteres");
        }
    }

    static validateDescription(description) {
        if (!description || description.length < 10) {
            throw new Error("La descripción debe tener al menos 10 caracteres");
        }
    }

    static validatePrice(price) {
        if (price === undefined || isNaN(price) || price < 0) {
            throw new Error("El precio debe ser un número positivo");
        }
    }

    static validateStock(stock) {
        if (!Number.isInteger(stock) || stock < 0) {
            throw new Error("El stock debe ser un número entero positivo");
        }
    }

    static validateCategoryId(categoryId) {
        if (!Number.isInteger(categoryId) || categoryId <= 0) {
            throw new Error("El ID de categoría debe ser un número entero positivo");
        }
    }

    static async validateUniqueName(name) {
        const existingProduct = await Product.findOne({ where: { name } });
        if (existingProduct) {
            throw new Error("Ya existe un producto con ese nombre");
        }
    }
}
