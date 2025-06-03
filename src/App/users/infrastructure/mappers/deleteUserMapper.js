import DeleteUserDTO from "../../application/DTO/deleteUserDTO.js";
import DeleteUserValidator from "../validators/deleteUserValidator.js";

class DeleteUserMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await DeleteUserValidator.validate(this.request);

            return new DeleteUserDTO({
                userId: this.request,
            })
        } catch (error) {
            throw error;
        }
    }
}

export default DeleteUserMapper