import Review from "../../domain/models/Reviews.js";

class GetReviewByIdValidator {
    static async validate(data) {

    }

    static async validateReviewId(reviewId) {
        const review = await Review.findByPk(reviewId);
        if (!review) {
            throw new Error('El comentario con este ID no existe')
        }
    }
}

export default GetReviewByIdValidator;