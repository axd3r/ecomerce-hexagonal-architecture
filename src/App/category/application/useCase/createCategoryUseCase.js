import CategoryRepository from "../../domain/repositories/categoryRepository.js";
import Category from "../../domain/models/Category.js";
import CreateCategoryDTO from "../DTO/createCategoryDTO.js";

export default class CreateCategoryUseCase {
    constructor(categoryRepository = new CategoryRepository()) {
        this.categoryRepository  = categoryRepository
    }

    async execute(createCategoryDTO = new CreateCategoryDTO){
        const categoryM = new Category();

        categoryM.name =  createCategoryDTO.name;
        categoryM.description = createCategoryDTO.description;
        const result = await this.categoryRepository.create(categoryM.dataValues);

        if(result != false){
            return result;
        }

        throw new Error("Error al crear la categoría");
    }
}
