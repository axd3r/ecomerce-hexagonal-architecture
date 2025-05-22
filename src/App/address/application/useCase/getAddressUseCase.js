import { paginateAndSearch } from "../../../../common/utils/paginateAndSearch";
import AddressRepository from "../../domain/repositories/addressRepository";

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