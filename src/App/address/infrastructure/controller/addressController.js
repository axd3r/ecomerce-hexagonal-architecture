import AddressServices from "../../application/services/addressServices.js";
import CreateAddressMapper from "../mappers/createAddressMapper.js";
import DeleteAddressMapper from "../mappers/deleteAddressMapper.js";
import GetAddressByIdMapper from "../mappers/getAddressByIdMapper.js";
import UpdateAddressMapper from "../mappers/updateAddressMapper.js";
import CreateAddressResponse from "../responses/createAddressResponse.js";
import GetAddressByIdResponse from "../responses/getAddressByIdResponse.js";
import GetAllAddressResponse from "../responses/getAllAddressResponse.js";
import UpdateAddressResponse from "../responses/updateAddressResponse.js";

class AddressController {
    constructor() {
        this.addressService = new AddressServices;
    }

    async create(req, res) {
        try {
            const addressDTO = await new CreateAddressMapper(req.body).fromRequest();
            const address = await this.addressService.create(addressDTO);
            const response = new CreateAddressResponse(address);

            return res.status(200).json({
                status: 'success',
                message: 'Direccion creada correctamente',
                data: response
            })
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message || 'Error al crear la direccion',
            })
        }
    }

    async update(req, res) {
        req.body.id = parseInt(req.params.id, 10);

        try {
            const addressDTO = await new UpdateAddressMapper(req.body).fromRequest();
            const address = await this.addressService.update(addressDTO);
            const response = new UpdateAddressResponse(address);

            return res.status(200).json({
                status: 'success',
                message: 'Direccion actualizada correctamente',
                data: response
            })
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
            })
        }
    }

    async getById(req, res) {
        const addressId = parseInt(req.params.id, 10);

        try {
            const addressDTO = await new GetAddressByIdMapper(addressId).fromRequest();
            const address = await this.addressService.getById(addressDTO);
            const response = new GetAddressByIdResponse(address);

            return res.status(200).json({
                status: 'success',
                message: 'Direccion encontrada!!',
                data: response,
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    async getAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const search = req.query.search || "";
        const limit = parseInt(req.query.limit) || 15;

        try {
            const address = await this.addressService.getAll(search, page, limit);
            const response = new GetAllAddressResponse(address);

            return res.status(200).json({
                status: 'success',
                message: 'Direcciones obtenidas exitosamente',
                data: response,
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
            })
        }
    }

    async delete(req, res) {
        const addressId = parseInt(req.params.id, 10);

        try {
            const addressDTO = await new DeleteAddressMapper(addressId).fromRequest();

            await this.addressService.delete(addressDTO.id);

            return res.status(200).json({
                status: 'success',
                message: 'Registro eliminado exitosamente',
            })
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message,
            });
        }
    }
}

export default AddressController