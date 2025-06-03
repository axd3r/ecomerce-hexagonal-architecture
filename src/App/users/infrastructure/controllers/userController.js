import userService from "../../application/services/userService.js";
import CreateUserMapper from "../mappers/createUserMapper.js";
import DeleteUserMapper from "../mappers/deleteUserMapper.js";
import GetUserByIdMapper from "../mappers/getUserByIdMapper.js";
import UpdateUserMapper from "../mappers/updateUserMapper.js";
import CreateUserResponse from "../responses/createUserResponse.js";
import GetAllUserResponse from "../responses/getAllUserResponse.js";
import GetUserByIdResponse from "../responses/getUserByIdResponse.js";
import UpdateUserResponse from "../responses/updateUserResponse.js";

export default class UserController {
    constructor() {
        this.userService = new userService();
    }

    async create (req, res) {
        try {
            const userDTO = await new CreateUserMapper(req.body).fromRequest(); 
            const user = await this.userService.create(userDTO);
            const response = new CreateUserResponse(user);
            return res.status(201).json({
                status: "success",
                message: "Usuario registrado",
                data: response
            });
        } catch ( error ) {
            return res.status(400).json( {
                status: "error",
                message: error.message
            });
        }
    }
    
    async getAll (req, res) {
        const page = parseInt(req.query.page) || 1;
        const search = req.query.search || "";
        const limit = parseInt(req.query.limit) || 15;

        try {
            const user = await this.userService.getAll(search, page, limit);
            const response = new GetAllUserResponse(user);

            return res.status(201).json({
                status: "success",
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                stats: 'error',
                message: error.message 
            });
        }
    }

    async getById ( req, res) {
        const userId = parseInt(req.params.userId, 10);

        try {
            const userDTO = await new GetUserByIdMapper(userId).fromRequest();
            const user = await this.userService.getById(userDTO.userId);
            const response = new GetUserByIdResponse(user);

            return res.status(201).json({
                status: "success",
                message: 'Useuario encontrado!!',
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: "No se pudo encontrar al usuario " +error.message
            });
        }
    }

    async update (req, res) {
        req.body.userId = parseInt(req.params.userId, 10);

        try {
            const userDTO = await new UpdateUserMapper(req.body).fromRequest();
            const user = await this.userService.update(userDTO);
            const response = new UpdateUserResponse(user);

            return res.status(201).json({
                status: "success",
                message: "Datos actualizados correctamente",
                data: response
            })
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            })
        }
    }

    async delete(req, res) {
        const userId = parseInt(req.params.userId, 10);

        try {
            const userDTO = await new DeleteUserMapper(userId).fromRequest();

            await this.userService.delete(userDTO.userId);

            return res.status(201).json({
                status: "success",
                message: "Registro eliminado exitosamente",
            })
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            })
        }
    }
}
