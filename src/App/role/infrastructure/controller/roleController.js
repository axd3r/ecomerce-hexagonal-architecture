import RoleServices from"../../application/services/roleServices.js";
import RoleCreatedResponse from"../responses/roleCreateResponse.js";
import RoleGetAllResponse from"../responses/roleGetAllResponse.js";
import RoleGetByIdResponse from"../responses/roleGetByIDResponse.js";
import RoleUpdateResponse from"../responses/roleUpdateResponse.js";

export default class RoleController {
    async create ( req, res) {
        try {
            const role = await RoleServices.create(req.body);
            return res.status(201).json({
                status: "success",
                message: "Rol creado exitosamente",
                data: RoleCreatedResponse(role)
            })
        } catch (error) {
            return res.status(400).json( {
                status: "error",
                message: error.message
            });
        }
    }

    async getAll (req, res) {
        try {
            const roles = await RoleServices.getAll();
            return res.status(200).json({
                status: "success",
                data: RoleGetAllResponse(roles)
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            })
        }
    }

    async getById (req, res) {
        try {
            const role = await RoleServices.getById(req.params.id);
            return res.status(201).json({
                status: "success",
                data: RoleGetByIdResponse(role)
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            });
        }
    }

    async update (req, res) {
        try {
            const role = await RoleServices.update(req.params.id, req.body);
            return res.status(201).json({
                status: "success",
                message: "Datos actualizados correctamente",
                data: RoleUpdateResponse(role)
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            });
        }
    }

    async delete (req, res) {
        try {
            const response = await RoleServices.delete(req.params.id);
            return res.status(201).json({
                status: "Success",
                message: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            });
        }
    }
}
