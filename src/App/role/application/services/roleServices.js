import roleRepository from"../../domain/repositories/roleRepository.js";
import RoleCreateValidator from"../../infrastructure/validators/roleCreateValidator.js";
import RoleDeleteValidator from"../../infrastructure/validators/roleDeleteValidator.js";
import RoleGetByIdValidator from"../../infrastructure/validators/roleGetByIdValidator.js";
import RoleUpdateValidator from"../../infrastructure/validators/roleUpdateValidator.js";

export default class RoleServices {
    async create(roleData) {
        await RoleCreateValidator.validateUniqueName(roleData.name);

        const role = await roleRepository.create(roleData);
        return role;
    }

    async getById(roleId) {
        await RoleGetByIdValidator.validateId(roleId);

        const role = await roleRepository.getById(roleId);
        return role;
    }

    async update(roleId, roleData) {
        await RoleUpdateValidator.validateRoleId(roleId);
        await RoleUpdateValidator.validateUniqueName(roleData.name, roleId);

        const role = await roleRepository.update(roleId, roleData);
        return role;
    }

    async delete(roleId) {
        await RoleDeleteValidator.validateId(roleId);

        const role = await roleRepository.delete(roleId);
        return role
    }

    async getAll() {
        return await roleRepository.getAll();
    }
}
