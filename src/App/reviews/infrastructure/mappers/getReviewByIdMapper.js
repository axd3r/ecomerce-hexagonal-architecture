import GetReviewByIdDTO from "../../application/DTO/getReviewByIdDTO.js";
import GetReviewByIdValidator from "../validators/getReviewByIdValidator.js";

class GetReviewByIdMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await GetReviewByIdValidator.validate(this.request);

            return new GetReviewByIdDTO({
                reviewId: this.request,
            })
        } catch (error) {
            throw Error;
        }
    }
}

export default GetReviewByIdMapper