import express from 'express';
import AddressController from '../controller/addressController.js';

const router = express.Router();
const addressController = new AddressController();

router.post('/', addressController.create.bind(addressController));
router.put('/:id', addressController.update.bind(addressController));
router.get('/:id', addressController.getById.bind(addressController));
router.get('/', addressController.getAll.bind(addressController));
router.delete('/:id', addressController.delete.bind(addressController));

export default router;