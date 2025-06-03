import CreateUserDTO from "../../application/DTO/createUserDTO.js";
import CreateUserValidator from "../validators/createUserValidator.js";

class CreateUserMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await CreateUserValidator.validate(this.request);

            return new CreateUserDTO({
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

export default CreateUserMapper;