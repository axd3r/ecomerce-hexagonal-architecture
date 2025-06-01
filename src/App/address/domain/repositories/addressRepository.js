import Address from "../models/Address.js";

class AddressRepository {
    async create(addressData) {
        const address = await Address.create(addressData);
        return address;
    }

    async getAll(options = {}) {
        return await Address.findAndCountAll(options);
    }

    async getById(id) {
        return await Address.findByPk(id);
    }

    async update(id, addressData) {
        const address = await this.getById(id);
        await address.update(addressData);
        return address;
    }

    async delete(id) {
        const address = await this.getById(id);
        return await address.destroy();
    }
}

export default AddressRepository;