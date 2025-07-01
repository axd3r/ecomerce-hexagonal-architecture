import Review from "../../domain/models/Reviews.js";
import ReviewRepository from "../../domain/repositories/reviewRepository.js";
import UpdateReviewDTO from "../DTO/updateReviewDTO.js";

class UpdateReviewUseCase {
    constructor(reviewRepository = new ReviewRepository()) {
        this.reviewRepository = reviewRepository;
    }

    async execute(updateReviewDTO = new UpdateReviewDTO) {
        const review = new Review();

        review.id           = updateReviewDTO.reviewId;
        review.userId       = updateReviewDTO.userId;
        review.productId    = updateReviewDTO.productId;
        review.calification = updateReviewDTO.calification;
        review.comment      = updateReviewDTO.comment;

        const result = await this.reviewRepository.update(review.dataValues.id, review.dataValues);

        if (result != false) {
            return result;
        }

        throw new Error('Error al actualizar la reseña');
    }
}

export default UpdateReviewUseCase;