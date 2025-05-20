import Product from "../models/Products.js";

export class ProductRepository {
    async create(productData) {
        const product = await Product.create(productData);
        return product;
    }

    async getAll(options = {}) {
        return await Product.findAndCountAll(options);
    }

    async getById(id) {
        const product = await Product.findByPk(id);
        return product;
    }

    async update(id, productData) {
        const product = await this.getById(id);
        await product.update(productData);
        return product;
    }

    async delete(id) {
        const product = await this.getById(id);
        await product.destroy();
        return { message: "Producto eliminado" };
    }
}
