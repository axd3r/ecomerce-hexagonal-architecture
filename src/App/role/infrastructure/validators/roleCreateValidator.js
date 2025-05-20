import Role from "../../domain/models/Role.js";

export default class RoleCreateValidator {
    static validateName(name) {
        if(!name || name.length < 4) {
            throw new Error("El nombre debe tener almenos 4 caracteres");
        }
    }
    
    static async validateUniqueName(name) {
        this.validateName(name);
        const existenRole = await Role.findOne({where: { name } });
        if(existenRole) {
            throw new Error("Este rola ya fue creado");
        }
    }
}
