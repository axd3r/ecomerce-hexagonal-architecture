import { Op } from"sequelize";
import Role from"../../domain/models/Role.js";

export default class RoleUpdateValidator {
    static async validateRoleId(roleId) {
        const role = await Role.findByPk(roleId);
        if(!role){
            throw new Error("El ID del rol especificado no existe");
        }
    }

    static validateName(name) {
        if(!name) {
            throw new Error("Name es un campo requerido");
        }
        if(name.length < 4){
            throw new Error("El nombre debe tener almenos 4 caracteres")
        }
    }

    static async validateUniqueName(name, roleId) {
        this.validateName(name);
        const existenRole = await Role.findOne({ where: { name, id: { [Op.ne]: roleId } } });
        if(existenRole){
            throw new Error("El nombre del rol ya existe");
        }
    }
}
