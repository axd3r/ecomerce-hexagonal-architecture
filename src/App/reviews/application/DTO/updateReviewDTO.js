class UpdateReviewDTO {
    constructor({reviewId, userId, productId, calification, comment}){
        this.reviewId       = reviewId;
        this.userId         = userId;
        this.productId      = productId;
        this.calification   = calification;
        this.comment        = comment;

        Object.freeze(this);
    }
}

export default UpdateReviewDTO;