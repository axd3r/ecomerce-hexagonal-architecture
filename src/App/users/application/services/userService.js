import UserRepository from "../../domain/repositories/userRepository.js";
import UserCreateValidator from "../../infrastructure/validators/userCreateValidator.js";
import UserDeleteValidator from "../../infrastructure/validators/userDeleteValidator.js";
import UserGetByIdValidator from "../../infrastructure/validators/userGetByIdValidator.js";
import UserUpdateValidator from "../../infrastructure/validators/userUpdateValidator.js";

export default class UserService {
    async create(userData) {
        try {
            UserCreateValidator.validateName(userData.name);
            await UserCreateValidator.validateEmail(userData.email);
            await UserCreateValidator.validateDocument(userData.document);
            UserCreateValidator.validatePhone(userData.phone);

            const user = await UserRepository.create(userData);
            return user;
        } catch (error) {
            throw new Error("Error al crear el usuario service: " + error.message);
        }
    }

    async getById(userId) {
        try {
            await UserGetByIdValidator.validateUserId(userId);

            const user = await UserRepository.getById(userId);
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async update(userId, userData) {
        try {
            await UserUpdateValidator.validateUserId(userId);

            UserUpdateValidator.validateName(userData.name);
            await UserUpdateValidator.validateEmail(userData.email, userId);
            await UserUpdateValidator.validateDocument(userData.document, userId);
            UserUpdateValidator.validatePhone(userData.phone);

            const user = await UserRepository.update(userId, userData);
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async delete(userId) {
        try {
            await UserDeleteValidator.validateUserId(userId);

            const user = await UserRepository.delete(userId);
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
