import { Op } from "sequelize";
import CategoryRepository from "../../domain/repositories/categoryRepository.js";
import { paginateAndSearch } from "../../../../common/utils/paginateAndSearch.js";

export default class GetAllCategoryUseCase {
    constructor(categoryRepository = new CategoryRepository()) {
        this.categoryRepository = categoryRepository;
    }

    async execute(searchText = "", page = 1, paginate = 15) {
        return await paginateAndSearch({
            repository: this.categoryRepository,
            searchText,
            page,
            paginate,
            searchField: "name"
        });
    }
}
