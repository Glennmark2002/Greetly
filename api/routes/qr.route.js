import express from 'express';
import { createQR, getQR, scanQR, updateQR, getArchiveQR } from '../controllers/qr.controller.js';

const router = express.Router();

router.post('/create', createQR); 
router.post('/get', getQR);
router.put('/scan', scanQR);
router.post('/update', updateQR);
router.post('/archive', getArchiveQR)


export default router;  