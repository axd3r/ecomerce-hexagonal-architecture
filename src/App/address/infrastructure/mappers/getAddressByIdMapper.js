import GetAddressByIdDTO from "../../application/DTO/getAddressByIdDTO.js";
import GetAddressByIdValidator from "../validators/getAddressByIdValidator.js";

class GetAddressByIdMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await GetAddressByIdValidator.validate(this.request);

            return new GetAddressByIdDTO({
                id: this.request,
            })
        } catch (error) {
            throw error
        }
    }
}

export default GetAddressByIdMapper;