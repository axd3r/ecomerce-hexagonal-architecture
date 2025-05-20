import userService from "../../application/services/userService.js";
import UserRepository from "../../domain/repositories/userRepository.js";

export default class UserController {
    async create (req, res) {
        try {
            const user = await userService.create(req.body);
            return res.status(201).json({
                status: "success",
                message: "Usuario registrado",
                user
            });
        } catch ( error ) {
            return res.status(400).json( {
                status: "error",
                message: error.message
            });
        }
    }
    
    async getAll (req, res) {
        try {
            const user = await UserRepository.getAll();
            return res.status(201).json({
                status: "success",
                user
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message 
            });
        }
    }

    async getById ( req, res) {
        try {
            const user = await userService.getById(req.params.id);
            return res.status(201).json({
                status: "success",
                user
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: "No se pudo encontrar al usuario " +error.message
            });
        }
    }

    async update (req, res) {
        const userId = req.params.id;
        const userData = req.body;

        try {
            const user = await userService.update(userId, userData);
            return res.status(201).json({
                status: "success",
                message: "Datos actualizados correctamente",
                user
            })
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            })
        }
    }

    async delete(req, res) {
        try {
            const response = await userService.delete(req.params.id);
            return res.status(201).json({
                status: "success",
                message: response
            })
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            })
        }
    }
}
