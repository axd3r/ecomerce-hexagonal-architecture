import express from "express";
import OrderController from "../controller/orderController.js";

const router = express.Router();
const orderController = new OrderController();

router.post('/', orderController.create.bind(orderController));
router.get('/', orderController.getAll.bind(orderController));
router.get('/:orderId', orderController.getById.bind(orderController));
router.put('/:orderId', orderController.update.bind(orderController));
router.delete('/:orderId', orderController.delete.bind(orderController));

export default router
