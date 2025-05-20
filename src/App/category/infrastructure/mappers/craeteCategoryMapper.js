import CreateCategoryDTO from "../../application/DTO/createCategoryDTO.js";
import CreateCategoryValidator from "../validators/createCategoryValidator.js";

class CreateCategoryMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await CreateCategoryValidator.validate(this.request);
            
            return new CreateCategoryDTO({
                name: this.request.name,
                description: this.request.description,
            });
        } catch (error) {
            throw error;
        }
    }
}

export default CreateCategoryMapper;
