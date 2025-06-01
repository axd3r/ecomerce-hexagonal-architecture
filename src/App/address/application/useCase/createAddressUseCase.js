import Address from "../../domain/models/Address.js";
import AddressRepository from "../../domain/repositories/addressRepository.js";
import CreateAddressDTO from "../DTO/createAddressDTO.js";

class CreateAddressUseCase {
    constructor(addressRepósitory = new AddressRepository) {
        this.addressRepósitory = addressRepósitory;
    }

    async execute(createAddressDTO = new CreateAddressDTO) {
        const address = new Address();

        address.userId      = createAddressDTO.userId;
        address.address     = createAddressDTO.address;
        address.department  = createAddressDTO.department;
        address.province    = createAddressDTO.province;
        address.district    = createAddressDTO.district;
        const result = await this.addressRepósitory.create(address.dataValues);

        if ( result != false) return result

        throw new Error(`Error al crear la direccion`)
    }
}

export default CreateAddressUseCase;