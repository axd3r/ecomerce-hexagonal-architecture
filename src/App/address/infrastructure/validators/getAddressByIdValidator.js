import Address from "../../domain/models/Address.js";

export default class GetAddressByIdValidator {

    static async validate(data) {
        await this.validateId(data);
    }

    static async validateId(addressId) {
        const address = await Address.findByPk(addressId);
        if (!address) {
            throw new Error("No se encontró la dirección seleccionada");
        }
    }
}
