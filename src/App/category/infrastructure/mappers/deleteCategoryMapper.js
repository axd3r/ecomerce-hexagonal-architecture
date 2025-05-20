import DeleteCategoryDTO from "../../application/DTO/deleteCategoryDTO.js";
import DeleteCategoryValidator from "../validators/deleteCategoryValidator.js";

class DeleteCategoryMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await DeleteCategoryValidator.validate(this.request);

            return new DeleteCategoryDTO({
                id: this.request,
            })
        } catch (error) {
            throw error;
        }
    }
}

export default DeleteCategoryMapper;