import express from "express";
import ReviewController from "../controller/reviewController.js";

const router = express.Router();
const reviewController = new ReviewController();

router.post('/', reviewController.create.bind(reviewController));
router.get('/', reviewController.getAll.bind(reviewController));
router.get('/:reviewId', reviewController.getById.bind(reviewController));
router.put('/:reviewId', reviewController.update.bind(reviewController));
router.delete('/:reviewId', reviewController.delete.bind(reviewController));

export default router;