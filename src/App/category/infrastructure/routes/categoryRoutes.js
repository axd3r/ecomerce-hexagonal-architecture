import express from "express";
import CategoryController from "../controller/categoryController.js";

const router = express.Router();
const categoryController = new CategoryController();

router.post("/", categoryController.create.bind(categoryController));
router.put("/:id", categoryController.update.bind(categoryController));
router.get("/:id", categoryController.getById.bind(categoryController));
router.get("/", categoryController.getAll.bind(categoryController));
router.delete("/:id", categoryController.delete.bind(categoryController));

export default router;

