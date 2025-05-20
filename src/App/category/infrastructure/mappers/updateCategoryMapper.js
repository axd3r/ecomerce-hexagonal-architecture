import UpdateCategoryDTO from "../../application/DTO/updateCategoriDTO.js";
import UpdateCategoryValidator from "../validators/updateCategoryValidator.js";

export default class UpdateCategoryMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await UpdateCategoryValidator.validate(this.request);

            return new UpdateCategoryDTO({
                id: this.request.id,
                name: this.request.name,
                description: this.request.description,
            });
        } catch (error) {
            throw error
        }
    }
}
