import DeleteReviewDTO from "../../application/DTO/deleteReviewDTO.js";
import DeleteReviewValidator from "../validators/deleteReviewValidator.js";

class DeleteReviewMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await DeleteReviewValidator.validate(this.request);

            return new DeleteReviewDTO({
                reviewId: this.request,
            })
        } catch (error) {
            throw error;
        }
    }
}

export default DeleteReviewMapper;