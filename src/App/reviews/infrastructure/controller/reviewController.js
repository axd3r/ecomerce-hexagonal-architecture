import ReviewService from "../../application/services/reviewService.js";
import CreateReviewMapper from "../mappers/createReviewMapper.js";
import DeleteReviewMapper from "../mappers/deleteReviewMapper.js";
import GetReviewByIdMapper from "../mappers/getReviewByIdMapper.js";
import UpdateReviewMapper from "../mappers/updateReviewMapper.js";
import CreateReviewResponse from "../responses/createReviewResponse.js";
import GetAllReviewResponse from "../responses/getAllReviewResponse.js";
import GetReviewByIdResponse from "../responses/getReviewByIdResponse.js";
import UpdateReviewResponse from "../responses/updateReviewResponse.js";

class ReviewController {
    constructor() {
        this.reviewService = new ReviewService();
    }

    async create (req, res) {
        try {
            const reviewDTO = await new CreateReviewMapper(req.body).fromRequest();
            const review = await this.reviewService.create(reviewDTO);
            const response = new CreateReviewResponse(review);
            return res.status(201).json({
                status: 'success',
                message: 'Comentario registrado correctamente',
                data: response
            });
        } catch (error) {
            return res.status(400).json( {
                status: "error",
                message: error.message
            });
        }
    }

    async getAll (req, res) {
        const page = parseInt(req.query.page) || 1;
        const search = req.query.search || '';
        const limit = parseInt(req.query.limit) || 15;

        try {
            const review = await this.reviewService.getAll(search, page, limit);
            const response = new GetAllReviewResponse(review);

            return res.status(200).json({
                status: 'success',
                message: 'Datos cargados correctamnte',
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message
            });
        }
    }

    async getById(req, res) {
        const reviewId = parseInt(req.params.reviewId, 10);

        try {
            const reviewDTO = await new GetReviewByIdMapper(reviewId).fromRequest();
            const review = await this.reviewService.getById(reviewDTO.reviewId);
            const response = new GetReviewByIdResponse(review);

            return res.status(200).json({
                status: 'success',
                message: 'Comentario encontrado!!',
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: 'No se pudo encontrar el registro '+error.message
            });
        }
    }

    async update(req, res) {
        req.body.reviewId = parseInt(req.params.reviewId, 10);

        try {
            const reviewDTO = await new UpdateReviewMapper(req.body).fromRequest();
            const review = await this.reviewService.update(reviewDTO);
            const response = new UpdateReviewResponse(review);

            return res.status(200).json({
                status: 'success',
                message: 'Registro actualizado con exito',
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message
            })
        }
    }

    async delete(req, res) {
        const reviewId = parseInt(req.params.reviewId, 10);

        try {
            const reviewDTO = await new DeleteReviewMapper(reviewId).fromRequest();

            await this.reviewService.delete(reviewDTO.reviewId);

            return res.status(201).json({
                status: 'success',
                message: 'Registro eliminado con exito!',
            })
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message
            })
        }
    }
}

export default ReviewController