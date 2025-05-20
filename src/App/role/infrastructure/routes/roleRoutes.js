import express from"express";
import RoleController from"../controller/roleController.js";

const router = express.Router();
const roleController = new RoleController();

router.post("/", roleController.create.bind(roleController));
router.get("/:id", roleController.getById.bind(roleController));
router.get("/", roleController.getAll.bind(roleController));
router.put("/:id", roleController.update.bind(roleController));
router.delete("/:id", roleController.delete.bind(roleController));

export default router;
