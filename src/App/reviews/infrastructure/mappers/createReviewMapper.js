import CreateReviewDTO from "../../application/DTO/createReviewDTO.js";
import CreateReviewValidator from "../validators/createReviewValidator.js";

class CreateReviewMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await CreateReviewValidator.validate(this.request);

            return new CreateReviewDTO({
                userId: this.request.userId,
                productId: this.request.productId,
                calification: this.request.calification,
                comment: this.request.comment,
            })
        } catch (error) {
            throw error
        }
    }
}

export default CreateReviewMapper;