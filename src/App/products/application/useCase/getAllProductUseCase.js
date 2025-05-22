import { paginateAndSearch } from "../../../../common/utils/paginateAndSearch.js";
import { ProductRepository } from "../../domain/repositories/productRepository.js";

export default class GetAllProductUseCase {
    constructor(productRepository = new ProductRepository()) {
        this.productRepository = productRepository;
    }

    async execute(searchText = "", page = 1, paginate = 15) {
        return await paginateAndSearch({
            repository: this.productRepository,
            searchText,
            page,
            paginate,
            searchField: "name"
        });
    }
}
