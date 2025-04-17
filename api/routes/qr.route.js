import express from 'express';
import { createQR, getQR, scanQR, updateQR } from '../controllers/qr.controller.js';

const router = express.Router();

router.post('/create', createQR); 
router.post('/get', getQR);
router.put('/scan', scanQR);
router.post('/update', updateQR);


export default router;  