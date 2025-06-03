import UpdateUserDTO from "../../application/DTO/updateUserDTO.js";
import UpdateUserValidator from "../validators/updateUserValidator.js";

class UpdateUserMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await UpdateUserValidator.validate(this.request);

            return new UpdateUserDTO({
                userId: this.request.userId,
                name: this.request.name,
                surname: this.request.surname,
                email: this.request.email,
                document: this.request.document,
                phone: this.request.phone,
                roleId: this.request.roleId,
            });
        }catch (error) {
            throw error
        }
    }
}

export default UpdateUserMapper;