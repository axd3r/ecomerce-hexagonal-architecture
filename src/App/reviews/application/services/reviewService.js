import CreateReviewDTO from "../DTO/createReviewDTO.js";
import UpdateReviewDTO from "../DTO/updateReviewDTO.js";
import CreateReviewUseCase from "../useCase/createReviewUseCase.js";
import DeleteReviewUseCase from "../useCase/deleteReviewUseCase.js";
import GetAllReviewUseCase from "../useCase/getAllReviewUseCase.js";
import GetReviewByIdUseCase from "../useCase/getReviewByIdUseCase.js";
import UpdateReviewUseCase from "../useCase/updateReviewUseCase.js";

class ReviewService {
    async create(createReviewDTO = new CreateReviewDTO()) {
        const createReviewUseCase = new CreateReviewUseCase();
        return createReviewUseCase.execute(createReviewDTO);
    }
    async getById(reviewId) {
        const getReviewByIdUseCase = new GetReviewByIdUseCase();
        return getReviewByIdUseCase.execute(reviewId);
    }
    async update(updateReviewDTO = new UpdateReviewDTO()) {
        const updateReviewUseCase= new UpdateReviewUseCase();
        return updateReviewUseCase.execute(updateReviewDTO);
    }
    async getAll(searchText = '', page = 1, paginate = 10) {
        const getAllReviewUseCase = new GetAllReviewUseCase();
        return getAllReviewUseCase.execute(searchText, page, paginate);
    }

    async delete(reviewId) {
        const deleteReviewUseCase = new DeleteReviewUseCase();
        return deleteReviewUseCase.execute(reviewId);
    }
}

export default ReviewService;