import AddressRepository from "../../domain/repositories/addressRepository";

class GetAddressByIdUseCase {
    constructor(addressRepository = new AddressRepository()) {
        this.addressRepository = addressRepository;
    }

    async execute(addressId) {
        return await this.addressRepository.getById(addressId);
    }
}

export default GetAddressByIdUseCase