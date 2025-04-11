import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.listen(3000);
mongoose.connect(process.env.MONGO);

app.get('/', (req, res) => res.json({ message : 'API is Working'}));
app.use('/api/auth', authRoutes);