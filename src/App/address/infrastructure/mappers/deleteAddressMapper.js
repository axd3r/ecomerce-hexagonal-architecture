import DeleteAddressDTO from "../../application/DTO/deleteAddressDTO.js";
import DeleteAddressValidator from "../validators/deleteAddressValidator.js";

class DeleteAddressMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await DeleteAddressValidator.validate(this.request);

            return new DeleteAddressDTO({
                id: this.request,
            })
        } catch (error) {
            throw error
        }
    }
}

export default DeleteAddressMapper;