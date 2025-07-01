import ReviewRepository from "../../domain/repositories/reviewRepository.js";

class GetReviewByIdUseCase {
    constructor(reviewRepository = new ReviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    async execute(reviewId) {
        return await this.reviewRepository.getById(reviewId);
    }
}

export default GetReviewByIdUseCase;