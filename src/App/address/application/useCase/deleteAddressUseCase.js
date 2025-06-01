import AddressRepository from "../../domain/repositories/addressRepository.js";

class DeleteAddressUseCase {
    constructor(addressRepository = new AddressRepository()) {
        this.addressRepository = addressRepository;
    }

    async execute(addressId) {
        return await this.addressRepository.delete(addressId);
    }
}

export default DeleteAddressUseCase