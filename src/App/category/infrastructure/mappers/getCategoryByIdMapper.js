import GetCategoryByIdDTO from"../../application/DTO/getCategoryByIdDTO.js";
import GetCategoryByIdValidator from"../validators/getCategoryByIdValidator.js";

class GetCategoryByIdMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await GetCategoryByIdValidator.validate(this.request);

            return new GetCategoryByIdDTO({
                id: this.request,
            })
        } catch (error) {
            throw error
        }
    }
}

export default GetCategoryByIdMapper;