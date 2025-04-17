import mongoose from 'mongoose';

const ArchiveSchema = mongoose.Schema(
  {
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    contactNumber : { type : String, required: true },
    purpose : { type: String, required: true },
    appointmentDate : { type : String, required: true },
    status : { type : String, default : 'pending' }, 
    deleteAt : { type: Date, default: Date.now }
  }
);

const Archive = mongoose.model('Archive', ArchiveSchema);
export default Archive;