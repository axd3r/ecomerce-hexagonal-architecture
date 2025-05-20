import Category from "../../domain/models/Category.js";

export default class CreateCategoryValidator {
    static async validate(data) {
        this.validateUniqueName(data.name);
    }

    static validateName(name) {
        if(!name || name.length < 4) {
            throw new Error("El nombre debe tener almenos 4 caracteres");
        }
    }
    
    static async validateUniqueName(name) {
        this.validateName(name);
        const existenCategory = await Category.findOne({where: { name } });
        if(existenCategory) {
            throw new Error("Este rol ya fue creado");
        }
    }
}
