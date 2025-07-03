import OrderService from "../../application/services/orderService.js";
import CreateOrderMapper from "../mappers/createOrderMapper.js";
import DeleteOrderMapper from "../mappers/deleteOrderMapper.js";
import GetOrderByIdMapper from "../mappers/getOrderByIdMapper.js";
import UpdateOrderMapper from "../mappers/updateOrderMapper.js";
import CreateOrderResponse from "../responses/createOrderResponse.js";
import GetAllOrderResponse from "../responses/getAllOrderResponse.js";
import GetOrderByIdResponse from "../responses/getOrderByIdResponse.js";
import UpdateOrderResponse from "../responses/updateOrderResponse.js";

class OrderController {
    constructor() {
        this.orderService = new OrderService();
    }

    async create (req, res) {
        try {
            const orderDTO = await new CreateOrderMapper(req.body).fromRequest();
            const order = await this.orderService.create(orderDTO);
            const response = new CreateOrderResponse(order);
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
            const order = await this.orderService.getAll(search, page, limit);
            const response = new GetAllOrderResponse(order);

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
        const orderId = parseInt(req.params.orderId, 10);

        try {
            const orderDTO = await new GetOrderByIdMapper(orderId).fromRequest();
            const order = await this.orderService.getById(orderDTO.orderId);
            const response = new GetOrderByIdResponse(order);

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
        req.body.orderId = parseInt(req.params.orderId, 10);

        try {
            const orderDTO = await new UpdateOrderMapper(req.body).fromRequest();
            console.log(req.body);
            
            const order = await this.orderService.update(orderDTO);
            const response = new UpdateOrderResponse(order);

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
        const orderId = parseInt(req.params.orderId, 10);

        try {
            const orderDTO = await new DeleteOrderMapper(orderId).fromRequest();

            await this.orderService.delete(orderDTO.orderId);

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

export default OrderController;