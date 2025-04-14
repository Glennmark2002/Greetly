import express from 'express';
import { getUser, google, signout } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/google', google);
router.get('/signout', signout);
router.get('/users', getUser);

export default router;