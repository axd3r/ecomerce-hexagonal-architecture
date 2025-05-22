import CreateAddressDTO from "../DTO/createAddressDTO";
import UpdateAddressDTO from "../DTO/updateAddressDTO";
import CreateAddressUseCase from "../useCase/createAddressUseCase";
import DeleteAddressUseCase from "../useCase/deleteAddressUseCase";
import GetAddressByIdUseCase from "../useCase/getAddressByIdUseCase";
import GetAllAddressUseCase from "../useCase/getAddressUseCase";
import UpdateAddressUseCase from "../useCase/upadteAddressUseCase";

class AddressServices {
    async create(createAddressDTO = new CreateAddressDTO()) {
        const createAddressUseCase = new CreateAddressUseCase();
        return createAddressUseCase.execute(createAddressDTO);
    }

    async update(updateAddressDTO = new UpdateAddressDTO()) {
        const updateAddressUseCase = new UpdateAddressUseCase();
        return updateAddressUseCase.execute(updateAddressDTO);
    }

    async getById(productId) {
        const getAddressByIdUseCase = new GetAddressByIdUseCase();
        return getAddressByIdUseCase.execute(productId);
    }

    async getAll(searchText = "", page = 1, paginate = 10) {
        const getAllAddressUseCase = new GetAllAddressUseCase();
        return getAllAddressUseCase.execute(searchText, page, paginate);
    }

    async delete(productId) {
        const deleteAddressUseCase = new DeleteAddressUseCase();
        return deleteAddressUseCase.execute(productId);
    }
}

export default AddressServices;