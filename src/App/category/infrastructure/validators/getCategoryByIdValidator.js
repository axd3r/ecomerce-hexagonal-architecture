import Category from "../../domain/models/Category.js";

export default class GetCategoryByIdValidator {

    static async validate(data) {
        await this.validateId(data);
    }

    static async validateId(categoryId){
        const category  = await Category.findByPk(categoryId);
        if(!category){
            throw new Error("No se encontro la categoria seleccionada");
        }
    }
}
