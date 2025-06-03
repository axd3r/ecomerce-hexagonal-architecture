import User from "../../domain/models/User.js";

export default class DeleteUserValidator {
    static async validate(data) {
      await this.validateUserId(data.userId);
    }
    static async validateUserId(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
          throw new Error("El usuario con el ID especificado no existe.");
        } 
    }
}
