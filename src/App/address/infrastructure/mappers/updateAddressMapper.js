import UpdateAddressDTO from "../../application/DTO/updateAddressDTO.js";
import UpdateAddressValidator from "../validators/updateAddressValidator.js";

class UpdateAddressMapper {
    constructor(requestBody) {
        this.request = requestBody;
    }

    async fromRequest() {
        try {
            await UpdateAddressValidator.validate(this.request);

            return new UpdateAddressDTO({
                id: this.request.id,
                userId: this.request.userId,
                address: this.request.address,
                department: this.request.departme,
                province: this.request.province,
                district: this.request.district,
            })
        } catch (error) {
            throw error;
        }
    }
}

export default UpdateAddressMapper;