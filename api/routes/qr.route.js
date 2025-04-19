import express from 'express';
import { createQR, getQR, scanQR, updateQR, getArchiveQR, getUserData, getLogs } from '../controllers/qr.controller.js';

const router = express.Router();

router.post('/create', createQR); 
router.post('/get', getQR);
router.put('/scan', scanQR);
router.post('/update', updateQR);
router.post('/archive', getArchiveQR);  
router.get('/users', getUserData);
router.get('/logs', getLogs)

export default router;  