import UpdateReviewDTO from "../../application/DTO/updateReviewDTO.js";
import UpdateReviewValidator from "../validators/updateReviewValidator.js";

class UpdateReviewMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await UpdateReviewValidator.validate(this.request);

            return new UpdateReviewDTO({
                reviewId: this.request.reviewId,
                userId: this.request.userId,
                productId: this.request.productId,
                calification: this.request.calification,
                comment: this.request.comment,
            });
        } catch (error) {
            throw error
        }
    }
}

export default UpdateReviewMapper;