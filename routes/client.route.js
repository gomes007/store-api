import express from 'express';
import ClientController from '../controllers/client.controller.js';


const router = express.Router();

router.post('/', ClientController.createClient);
router.get('/', ClientController.getClients);
router.get('/:id', ClientController.getClient);
router.delete('/:id', ClientController.deleteClient);
router.put('/:id', ClientController.updateClient);
router.get('/sale/:id', ClientController.getClientBySaleId);


export default router;
