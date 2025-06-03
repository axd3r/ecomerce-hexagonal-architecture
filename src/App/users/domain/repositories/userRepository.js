import User from "../models/User.js";

export default class UserRepository {
    async create(userData) {
        const user = await User.create(userData);
        return user;
    }

    async getAll(options = {}) {
        return await User.findAndCountAll(options);
    }

    async getById(userId) {
        const user = await User.findByPk(userId);
        return user;
    }

    async update(userId, userData) {
        const user = await this.getById(userId);
        await user.update(userData);
        return user;
    }

    async delete(userId) {
        const user = await this.getById(userId);
        await user.destroy();
        return {message: "Usuario Eliminado"};
    }
}
