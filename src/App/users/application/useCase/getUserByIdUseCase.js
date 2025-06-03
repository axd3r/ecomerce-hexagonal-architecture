import UserRepository from "../../domain/repositories/userRepository.js";

class GetUserByIdUseCase {
    constructor(userRepository = new UserRepository()) {
        this.userRepository = userRepository;
    }

    async execute(userId) {
        return await this.userRepository.getById(userId);
    }
}

export default GetUserByIdUseCase;