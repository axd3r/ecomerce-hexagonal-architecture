import User from "../../domain/models/User.js";

export default class GetUserByIdValidator {
    static async validate(data) {
        await this.validateUserId(data);
    }
    
    static async validateUserId(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("El usuario con el ID especifico no existe");
        }
    }
}
