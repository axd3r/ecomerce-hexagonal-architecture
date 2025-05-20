import express from "express";
import ProductController from "../controller/productController.js";

const router = express.Router();
const productController = new ProductController();

router.post("/", productController.create.bind(productController));
router.put("/:productId", productController.update.bind(productController));
router.get("/:productId", productController.getById.bind(productController));
router.get("/", productController.getAll.bind(productController));
router.delete("/:productId", productController.delete.bind(productController));

export default router;