import mongoose from 'mongoose'; 

const QRSchema = new mongoose.Schema(
  {
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    contactNumber : { type : String, required: true },
    purpose : { type: String, required: true },
    appointmentDate : { type : String, required: true },
    appointmentTime : { type : String, required : true },
    status : { type : String, default : 'pending' }
  }
); 

const QR = mongoose.model('QRCode', QRSchema); 
export default QR; 