import User from "../models/User.js";

export default class UserRepository {
    async create(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch ( error ) {
            throw new Error("Error al crear el usuario repo: "+ error.message);
        }
    }

    async getAll() {
        try {
            const user = await User.findAll();
            return user;
        } catch ( error ) {
            throw new Error("Error al obtener los usuarios: "+ error.message);
        }
    }

    async getById(id) {
        try {
            const user = User.findByPk(id);
            if(!user){
                throw new Error("Usuario no encontrado");
            }
            return user;
        } catch ( error ) {
            throw new Error("Error al obtener el usuario: " + error.message);
        }
    }

    async update(id, userData) {
        try {
            const user = await this.getById(id);
            if(!user){
                throw new Error("Usuario no encontrado");
            }
            await user.update(userData);
            return user;
        } catch ( error ) {
            throw new Error("Error al actualizar el usuario: " + error.message);
        }
    }

    async delete(id) {
        try {
            const user = await this.getById(id);
            if(!user){
                throw new Error("Usuario no encontrado");
            }
            await user.destroy();
            return {message: "Usuario Eliminado"};
        } catch ( error ) {
            throw new Error("Error al eliminar el usuario: " + error.message);
        }
    }
}
