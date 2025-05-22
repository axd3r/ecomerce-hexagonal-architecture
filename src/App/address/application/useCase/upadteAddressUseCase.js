import Address from "../../domain/models/Address";
import AddressRepository from "../../domain/repositories/addressRepository";
import UpdateAddressDTO from "../DTO/updateAddressDTO";

class UpdateAddressUseCase {
    constructor(addressRepository = new AddressRepository) {
        this.addressRepository = addressRepository;
    }

    async execute(updateAddressDTO = new UpdateAddressDTO) {
        const address = new Address();

        address.id          = updateAddressDTO.id;
        address.userId      = updateAddressDTO.userId;
        address.address     = updateAddressDTO.address;
        address.department  = updateAddressDTO.department;
        address.province    = updateAddressDTO.province;
        address.district    = updateAddressDTO.district;
        const result = await this.addressRepository.update(address.dataValues.id, address.dataValues);

        if ( result != false) return result

        throw new Error(`Error al crear la direccion`)
    }
}

export default UpdateAddressUseCase;