class CreateReviewResponse {
    constructor(review) {
        this.id = review.id;
        this.userId = review.userId;
        this.productId = review.productId;
        this.calification = review.calification;
        this.comment = review.comment;
    }
}

export default CreateReviewResponse;