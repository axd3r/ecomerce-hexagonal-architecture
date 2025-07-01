import { paginateAndSearch } from "../../../../common/utils/paginateAndSearch.js";
import ReviewRepository from "../../domain/repositories/reviewRepository.js";

class GetAllReviewUseCase {
    constructor(reviewRepository = new ReviewRepository()) {
        this.reviewRepository = reviewRepository;
    }

    async execute(searchText = '', page = 1, paginate = 15) {
        return await paginateAndSearch({
            repository: this.reviewRepository,
            searchText,
            page,
            paginate,
            searchField: 'name'
        })
    }
}

export default GetAllReviewUseCase