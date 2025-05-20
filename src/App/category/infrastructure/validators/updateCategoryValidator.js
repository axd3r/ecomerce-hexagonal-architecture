import { Op } from "sequelize";
import Category from "../../domain/models/Category.js";

export default class UpdateCategoryValidator {
    static async validate(data) {
        await this.validateId(data.id);
        await this.validateUniqueName(data.name, data.id);
    }

    static async validateId(categoryId) {
        const category = await Category.findByPk(categoryId);

        if (!category) {
            throw new Error("No se encontro la categoria seleccionada");
        }
    }

    static validateName(name) {
        if (!name || name.length < 4) {
            throw new Error("El nombre debe tener almenos 4 caracteres");
        }
    }

    static async validateUniqueName(name, categoryId) {
        if (name) {
            this.validateName(name);
        
            const existingCategory = await Category.findOne({ where: { name, id: { [Op.ne]: categoryId } } });
            if (existingCategory) {
                throw new Error("Este nombre de categoría ya está en uso");
            }
        }
        
    }
}
