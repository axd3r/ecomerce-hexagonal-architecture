import { paginateAndSearch } from "../../../../common/utils/paginateAndSearch.js";
import UserRepository from "../../domain/repositories/userRepository.js";

class GetAllUserUseCase {
    constructor(userRepository = new UserRepository()) {
        this.userRepository = userRepository;
    }

    async execute(searchText = '', page = 1, paginate = 15) {
        return await paginateAndSearch({
            repository: this.userRepository,
            searchText,
            page,
            paginate,
            searchField: 'name'
        });
    }
}

export default GetAllUserUseCase;