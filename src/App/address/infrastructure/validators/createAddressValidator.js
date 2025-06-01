import User from "../../../users/domain/models/User.js";

export default class CreateAddressValidator {
    static async validate(data) {
        await this.validateUserId(data.userId);
        this.validateAddress(data.address);

        if (data.department) {
            this.validateOptionalField(data.department, "departamento");
        }

        if (data.province) {
            this.validateOptionalField(data.province, "provincia");
        }

        if (data.district) {
            this.validateOptionalField(data.district, "distrito");
        }
    }

    static async validateUserId(userId) {
        if (!userId || isNaN(userId)) {
            throw new Error("Debe proporcionar un ID de usuario válido");
        }

        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("El usuario especificado no existe");
        }
    }

    static validateAddress(address) {
        if (!address || address.length < 5) {
            throw new Error("La dirección debe tener al menos 5 caracteres");
        }
    }

    static validateOptionalField(value, fieldName) {
        if (value.length < 2) {
            throw new Error(`El campo ${fieldName} debe tener al menos 2 caracteres`);
        }
    }
}
