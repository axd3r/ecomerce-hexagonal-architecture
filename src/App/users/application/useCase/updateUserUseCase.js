import User from "../../domain/models/User.js";
import UserRepository from "../../domain/repositories/userRepository.js";
import UpdateUserDTO from "../DTO/updateUserDTO.js";

class UpdateUserUseCase {
    constructor(userRespository = new UserRepository()) {
        this.userRespository = userRespository;
    }

    async execute(updateUserDTO = new UpdateUserDTO) {
        const user = new User();

        user.id = updateUserDTO.userId;
        user.name = updateUserDTO.name;
        user.surname = updateUserDTO.surname;
        user.email = updateUserDTO.email;
        user.document = updateUserDTO.document;
        user.phone = updateUserDTO.phone;
        user.roleId = updateUserDTO.roleId;
        
        const result = await this.userRespository.update(user.dataValues.id, user.dataValues);

        if(result != false) {
            return result;
        }

        throw new Error('Error al crear al usuario');
    }
}

export default UpdateUserUseCase;