import CreateAddressDTO from "../../application/DTO/createAddressDTO.js";
import CreateAddressValidator from "../validators/createAddressValidator.js";

class CreateAddressMapper {
    constructor(requestBody){
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await CreateAddressValidator.validate(this.request);

            return new CreateAddressDTO({
                userId:     this.request.userId,
                address:    this.request.address,
                department: this.request.departme,
                province:   this.request.province,
                district:   this.request.district,
            })
        } catch (error) {
            throw error;
        }
    }
}

export default CreateAddressMapper;