import User from "../../domain/models/User.js";

export default class UserGetByIdValidator {
    static async validateUserId(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("El usuario con el ID especifico no existe");
        }
    }
}
