import { paginateAndSearch } from "../../../../common/utils/paginateAndSearch.js";
import AddressRepository from "../../domain/repositories/addressRepository.js";

class GetAllAddressUseCase {
    constructor(addressRepository = new AddressRepository()) {
        this.addressRepository = addressRepository;
    }

    async execute(searchText = '', page = 1, paginate = 15) {
        return await paginateAndSearch({
            repository: this.addressRepository,
            searchText,
            page,
            paginate,
            searchField: 'name',
        });
    }
}

export default GetAllAddressUseCase