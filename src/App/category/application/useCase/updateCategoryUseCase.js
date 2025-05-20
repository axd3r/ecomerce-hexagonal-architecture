import Category from "../../domain/models/Category.js";
import CategoryRepository from "../../domain/repositories/categoryRepository.js";
import UpdateCategoryDTO from "../DTO/updateCategoriDTO.js";

export default class UpdateCategoryUseCase {
    constructor(categoryRepository = new CategoryRepository()) {
        this.categoryRepository = categoryRepository;
    }

    async execute(updateCategoryDTO = new UpdateCategoryDTO) {
        const category = new Category();

        category.id = updateCategoryDTO.id;
        category.name = updateCategoryDTO.name;
        category.description = updateCategoryDTO.description;
        
        const result = await this.categoryRepository.update(category.dataValues.id, category.dataValues);

        if(result != false){
            return result;
        }

        throw new Error("Error al actualizar la categoria");
    }
}
