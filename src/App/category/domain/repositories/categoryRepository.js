import Category from "../models/Category.js";

export default class CategoryRepository {
    async create(categoryData) {
        const category = await Category.create(categoryData);
        return category;
    }

    async getAll(options = {}) {
        return await Category.findAndCountAll(options);
    }

    async getById(id) {
        const category = await Category.findByPk(id);
        return category;
    }

    async update(id, categoryData) {
        const category = await this.getById(id);
        await category.update(categoryData);
        return category;
    }

    async delete(id) {
        const role = await this.getById(id);
        await role.destroy();
        return {message: "Categoria eliminada"}
    }
}
