import express from 'express';
import { createQR, getQR } from '../controllers/qr.controller.js';

const router = express.Router();

router.post('/create', createQR); 
router.get('/get', getQR);


export default router;  