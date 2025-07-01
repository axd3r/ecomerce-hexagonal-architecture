import Review from "../../domain/models/Reviews.js";

class DeleteReviewValidator {
    static async validate(data) {
        console.log(data);
        
        await this.validateReviewId(data);
    }

    static async validateReviewId(reviewId) {
        const review = await Review.findByPk(reviewId);
        
        if (!review) {
            throw new Error('El comentario con este ID no existe');
        }
    }
}

export default DeleteReviewValidator;