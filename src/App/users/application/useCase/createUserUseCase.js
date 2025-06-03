import User from "../../domain/models/User.js";
import UserRepository from "../../domain/repositories/userRepository.js";
import CreateUserDTO from "../DTO/createUserDTO.js";

class CreateUserUseCase {
    constructor(userRespository = new UserRepository()) {
        this.userRespository = userRespository;
    }

    async execute(createUserDTO = new CreateUserDTO) {
        const user = new User();

        user.name = createUserDTO.name;
        user.surname = createUserDTO.surname;
        user.email = createUserDTO.email;
        user.document = createUserDTO.document;
        user.phone = createUserDTO.phone;
        user.roleId = createUserDTO.roleId;

        const result = await this.userRespository.create(user.dataValues);

        if(result != false) {
            return result;
        }

        throw new Error('Error al crear al usuario');
    }
}

export default CreateUserUseCase;