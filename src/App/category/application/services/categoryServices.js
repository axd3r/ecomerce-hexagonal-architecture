import CreateCategoryDTO from "../DTO/createCategoryDTO.js";
import UpdateCategoryDTO from "../DTO/updateCategoriDTO.js";
import CreateCategoryUseCase from "../useCase/createCategoryUseCase.js";
import DeleteCategoryUseCase from "../useCase/deleteCategoryUseCase.js";
import GetAllCategoryUseCase from "../useCase/getAllCategoryUseCase.js";
import GetCategoryByIdUseCase from "../useCase/getCategoryByIdUseCase.js";
import UpdateCategoryUseCase from "../useCase/updateCategoryUseCase.js";

export default class CategoryServices {

    async create(createCategoryDTO = new CreateCategoryDTO()) {
        const createCategoryUseCase = new CreateCategoryUseCase();
        return createCategoryUseCase.execute(createCategoryDTO);
    }

    async update(updateCategoryDTO = new UpdateCategoryDTO()) {
        const updateCategoryUseCase = new UpdateCategoryUseCase();
        return updateCategoryUseCase.execute(updateCategoryDTO);
    }

    async getById(categoryId) {
        const getCategoryByIdUseCase = new GetCategoryByIdUseCase();
        return getCategoryByIdUseCase.execute(categoryId);
    }

    async getAll(searchText = "", page = 1, paginate = 10) {
        const getAllCategoryUseCase = new GetAllCategoryUseCase();
        return getAllCategoryUseCase.execute(searchText, page, paginate);
    }

    async delete(categoryId) {
        const deleteCategoryUseCase = new DeleteCategoryUseCase();
        return deleteCategoryUseCase.execute(categoryId);
    }
}
