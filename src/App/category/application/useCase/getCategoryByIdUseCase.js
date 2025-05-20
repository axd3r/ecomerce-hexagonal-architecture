import CategoryRepository from  "../../domain/repositories/categoryRepository.js";

export default class GetCategoryByIdUseCase {
    constructor(categoryRepository = new CategoryRepository()){
        this.categoryRepository = categoryRepository;
    }

    async execute(categoryId) {
        return await this.categoryRepository.getById(categoryId);
    }
}
