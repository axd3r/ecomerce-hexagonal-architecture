import categoryServices from "../../application/services/categoryServices.js";
import CreateCategoryMapper from "../mappers/craeteCategoryMapper.js";
import DeleteCategoryMapper from "../mappers/deleteCategoryMapper.js";
import GetCategoryByIdMapper from "../mappers/getCategoryByIdMapper.js";
import UpdateCategoryMapper from "../mappers/updateCategoryMapper.js";
import CreateCategoryResponse from "../responses/createCategoryResponse.js";
import GetAllCategoryResponse from "../responses/getAllCategoryResponse.js";
import GetCategoryByIdResponse from "../responses/getCategoryByIdResponse.js";
import UpdateCategoryResponse from "../responses/updateCategoryResponse.js";

export default class CategoryController {
    constructor() {
        this.categoryService = new categoryServices();
    }

    async create(req, res) {
        try {
            const categoryDTO = await new CreateCategoryMapper(req.body).fromRequest();
            const category = await this.categoryService.create(categoryDTO);
            const response = new CreateCategoryResponse(category);

            return res.status(200).json({
                status: "success",
                message: "Categoría creada exitosamente",
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message || "Error al crear la categoría",
            });
        }
    }

    async update(req, res) {
        req.body.id = parseInt(req.params.id, 10);
        
        try {
            const categoryDTO = await new UpdateCategoryMapper(req.body).fromRequest();
            const category = await this.categoryService.update(categoryDTO);
            const response = new UpdateCategoryResponse(category);

            return res.status(200).json({
                status: "success",
                message: "Categoria actualizada exitosamente",
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            });
        }
    }

    async getById(req, res) {
        const categoryId = parseInt(req.params.id, 10);

        try {
            const categoryDTO = await new GetCategoryByIdMapper(categoryId).fromRequest();
            
            const category = await this.categoryService.getById(categoryDTO.id);
            const response = new GetCategoryByIdResponse(category);

            return res.status(200).json({
                status: "success",
                message: "Categoria encontrada!!",
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message
            });
        }
    }

    async getAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const search = req.query.search || "";
        const limit = parseInt(req.query.limit) || 15;

        try {
            const category = await this.categoryService.getAll(search, page, limit);
            const response = new GetAllCategoryResponse(category);

            return res.status(200).json({
                status: "success",
                message: "Categorías obtenidas exitosamente",
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message,
            });
        }
    }

    async delete(req, res) {
        const categoryId = parseInt(req.params.id, 10);

        try {
            const categoryDTO = await new DeleteCategoryMapper(categoryId).fromRequest();

            await this.categoryService.delete(categoryDTO.id);

            return res.status(200).json({
                status: "success",
                message: "Registro eliminado exitosamente",
            });

        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message,
            });
        }
    }
}
