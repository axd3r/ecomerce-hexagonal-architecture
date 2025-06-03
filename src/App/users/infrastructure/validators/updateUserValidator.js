import { Op } from "sequelize";
import User from "../../domain/models/User.js";

export default class UpdateUserValidator {
    static async validate(data) {
        this.validateName(data.name);
        this.validateEmailFormat(data.email);
        await this.validateEmail(data.email, data.userId);
        await this.validateDocument(data.document, data.userId);
        this.validatePhone(data.phone);
        await this.validateUserId(data.userId);
    }

    static validateName(name) {
        if(!name || name.length < 3) {
            throw new Error("El nombre debe terne almenos 3 caracteres");
        }
    }

    static validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            throw new Error("Formato de correo no valido.");
        }
    }

    static async validateEmail(email, userId) {
        this.validateEmailFormat(email)
        const existengUser = await User.findOne({ where: { email, id: { [Op.ne]: userId } } });
        if(existengUser){
            throw new Error("El correo ya esta registrado");
        }
    }

    static async validateDocument(document, userId) {
        const existengUser = await User.findOne({ where: { document, id: { [Op.ne]: userId } } });
        if(existengUser){
            throw new Error("Este documento ya esta registardo");
        }
    }

    static validatePhone(phone) {
        const phoneRegex = /^[0-9]{9}$/;
        if(!phone || !phoneRegex.test(phone)) {
            throw new Error("El telefono debe tener 9 digitos.");
        }
    }

    static async validateUserId(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
          throw new Error("El usuario con el ID especificado no existe.");
        } 
    }
}
