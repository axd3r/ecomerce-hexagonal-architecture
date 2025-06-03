import UserRepository from "../../domain/repositories/userRepository.js";

class DeleteUserUseCase {
    constructor(userRepository = new UserRepository()) {
        this.userRespository = userRepository;
    }

    async execute(userId) {
        return await this.userRespository.delete(userId);
    }
}

export default DeleteUserUseCase;