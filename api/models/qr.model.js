import mongoose from 'mongoose'; 

const QRSchema = new mongoose.Schema(
  {
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    text : { type: String, required: true }
  }
); 

const QR = mongoose.model('QRCode', QRSchema); 
export default QR; 