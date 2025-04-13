import express from 'express';
import { createQR, getQR, scanQR } from '../controllers/qr.controller.js';

const router = express.Router();

router.post('/create', createQR); 
router.post('/get', getQR);
router.put('/scan', scanQR);


export default router;  