import Role from "../../domain/models/Role.js";

export default class RoleDeleteValidator {
    static async validateId(roleId) {
        const role = await Role.findByPk(roleId);
        if (!role) {
            throw new Error("El ID del rol especifico no existe");
        }
    }
}
