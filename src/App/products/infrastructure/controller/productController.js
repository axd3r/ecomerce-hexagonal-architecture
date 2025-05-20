import ProductServices from "../../application/services/productServices.js";
import CreateProductMapper from "../mappers/createProductMapper.js";
import DeleteProductMapper from "../mappers/deleteProductMapper.js";
import GetProductByIdMapper from "../mappers/getProductByIdMapper.js";
import UpdateProductMapper from "../mappers/updateProductMapper.js";
import CreateProductResponse from "../responses/createProductResponse.js";
import GetAllProductResponse from "../responses/getAllProductResponse.js";
import GetProductByIdResponse from "../responses/getProductByIdResponse.js";
import UpdateProductResponse from "../responses/updatePorductResponse.js";

export default class ProductController {
    constructor() {
        this.productService = new ProductServices();
    }

    async create(req, res) {
        try {
            const productDTO = await new CreateProductMapper(req.body).fromRequest();
            const product = await this.productService.create(productDTO);
            const response = new CreateProductResponse(product);

            return res.status(200).json({
                status: "success",
                message: "Producto creado exitosamente",
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message || "Error al crear el producto",
            });
        }
    }

    async update(req, res) {
        req.body.id = parseInt(req.params.productId, 10);

        try {
            const productDTO = await new UpdateProductMapper(req.body).fromRequest();
            const product = await this.productService.update(productDTO);
            const response = new UpdateProductResponse(product);

            return res.status(200).json({
                status: "success",
                message: "Producto actualizado exitosamente",
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
        const productId = parseInt(req.params.productId, 10);

        try {
            const productDTO = await new GetProductByIdMapper(productId).fromRequest();
            const product = await this.productService.getById(productDTO.id);
            const response = new GetProductByIdResponse(product);

            return res.status(200).json({
                status: "success",
                message: "Producto encontrado!!",
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
            const product = await this.productService.getAll(search, page, limit);
            const response = new GetAllProductResponse(product);

            return res.status(200).json({
                status: "success",
                message: "Productos obtenidos exitosamente",
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
        const productId = parseInt(req.params.productId, 10);

        try {
            const productDTO = await new DeleteProductMapper(productId).fromRequest();
            await this.productService.delete(productDTO.id);

            return res.status(200).json({
                status: "success",
                message: "Producto eliminado exitosamente",
            });

        } catch (error) {
            return res.status(400).json({
                status: "error",
                message: error.message,
            });
        }
    }
}
