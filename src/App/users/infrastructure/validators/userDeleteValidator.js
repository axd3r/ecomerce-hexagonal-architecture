import User from "../../domain/models/User.js";

export default class UserDeleteValidator {
    static async validateUserId(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
          throw new Error("El usuario con el ID especificado no existe.");
        } 
    }
}
