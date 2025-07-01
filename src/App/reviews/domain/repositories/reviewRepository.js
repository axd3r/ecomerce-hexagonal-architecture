import Review from "../models/Reviews.js";

class ReviewRepository {
    async create(reviewData) {
        const review = await Review.create(reviewData);
        return review;
    }

    async getAll(options = {}) {
        return await Review.findAndCountAll(options);
    }

    async getById(reviewId) {
        const review = await Review.findByPk(reviewId);
        return review;
    }

    async update(reviewId, reviewData) {
        const review = await this.getById(reviewId);
        await review.update(reviewData);
        return review;
    }

    async delete(reviewId) {
        const review = await this.getById(reviewId);
        await review.destroy();
        return {message: "Registro Eliminado"};
    }
}

export default ReviewRepository;