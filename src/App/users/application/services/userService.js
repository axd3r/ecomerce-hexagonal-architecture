import CreateUserDTO from "../DTO/createUserDTO.js";
import UpdateUserDTO from "../DTO/updateUserDTO.js";
import CreateUserUseCase from "../useCase/createUserUseCase.js";
import DeleteUserUseCase from "../useCase/deleteUserUseCase.js";
import GetAllUserUseCase from "../useCase/getAllUserUseCase.js";
import UpdateUserUseCase from "../useCase/updateUserUseCase.js";
import GetUserByIdUseCase from "../useCase/getUserByIdUseCase.js";

export default class UserService {
    async create(createUserDTO = new CreateUserDTO()) {
        const createUserUseCase = new CreateUserUseCase();
        return createUserUseCase.execute(createUserDTO);
    }

    async getById(userId) {
        const getUserByIdUseCase = new GetUserByIdUseCase();
        return getUserByIdUseCase.execute(userId);
    }

    async update(updateUserDTO = UpdateUserDTO()) {
        const updateUserUseCase = new UpdateUserUseCase();
        return updateUserUseCase.execute(updateUserDTO)
    }

    async getAll(searchText = '', page = 1, paginate = 10) {
        const getAllUserUseCase = new GetAllUserUseCase();
        return getAllUserUseCase.execute(searchText, page, paginate);
    }

    async delete(userId) {
        const deleteUserUseCase = new DeleteUserUseCase();
        return deleteUserUseCase.execute(userId);
    }
}
