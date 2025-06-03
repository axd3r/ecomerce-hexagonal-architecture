import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();
const userController = new UserController();

router.post("/", userController.create.bind(userController));
router.get("/", userController.getAll.bind(userController));
router.get("/:userId", userController.getById.bind(userController));
router.put("/:userId", userController.update.bind(userController));
router.delete("/:userId", userController.delete.bind(userController));

export default router;
