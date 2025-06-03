import GetUserByIdDTO from "../../application/DTO/getUserByIdDTO.js";
import GetUserByIdValidator from "../validators/getUserByIdValidator.js";

class GetUserByIdMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await GetUserByIdValidator.validate(this.request);

            return new GetUserByIdDTO({
                userId: this.request,
            })
        } catch (error) {
            throw Error;
        }
    }
}

export default GetUserByIdMapper