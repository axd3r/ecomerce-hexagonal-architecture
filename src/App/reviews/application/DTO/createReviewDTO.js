class CreateReviewDTO {
    constructor({userId, productId, calification, comment}){
        this.userId         = userId;
        this.productId      = productId;
        this.calification   = calification;
        this.comment        = comment;

        Object.freeze(this);
    }
}

export default CreateReviewDTO;