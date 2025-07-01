import ReviewRepository from "../../domain/repositories/reviewRepository.js";

class DeleteReviewUseCase {
    constructor(reviewRepository = new ReviewRepository()) {
        this.reviewRepository = reviewRepository;
    }

    async execute(reviewId) {
        return await this.reviewRepository.delete(reviewId);
    }
}

export default DeleteReviewUseCase