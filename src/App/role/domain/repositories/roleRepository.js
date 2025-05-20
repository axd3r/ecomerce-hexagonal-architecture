import Role from "../models/Role.js";

export default class RoleRepository {
    async create(roleData) {
        const role = await Role.create(roleData);
        return role;
}

    async getAll() {
        const role = await Role.findAll();
        return role;
    }

    async getById(id) {
        const role = await Role.findByPk(id);
        return role;
    }

    async update(id, roleData) {
        const role = await this.getById(id);
        await role.update(roleData);
        return role;
    }

    async delete(id) {
        const role = await this.getById(id);
        await role.destroy();
        return {message: "Rol eliminado"};
        
    }
}
