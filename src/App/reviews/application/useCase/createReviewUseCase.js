import Review from "../../domain/models/Reviews.js";
import ReviewRepository from "../../domain/repositories/reviewRepository.js";
import CreateReviewDTO from "../DTO/createReviewDTO.js";

class CreateReviewuUseCase {
    constructor(reviewRepository = new ReviewRepository()) {
        this.reviewRepository = reviewRepository
    }

    async execute(createReviewDTO = new CreateReviewDTO) {
        const review = new Review();

        review.userId = createReviewDTO.userId;
        review.productId = createReviewDTO.productId;
        review.calification = createReviewDTO.calification;
        review.comment = createReviewDTO.comment;

        const result = await this.reviewRepository.create(review.dataValues);

        if(result != false) {
            return result;
        }

        throw new Error('Error al guardar el registro');
    }
}

export default CreateReviewuUseCase;