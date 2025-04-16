import QR from "../models/qr.model.js";
import QRCode from 'qrcode';
import moment from 'moment';

export const createQR = async (req, res) => {

  try {
    
    const { user, appointmentDate, ...rest } = req.body; 
    const isExisting = await QR.findOne({ user });

    if(!isExisting) {
      
      const formatDate = moment(appointmentDate).format('MMM D, YYYY, h:mm A');
      const qr = new QR({ user, appointmentDate: formatDate, ...rest });
      const saved = await qr.save();
      return res.status(201).json({ message: 'QR created', qr: saved });
    }

    return res.status(200).json({ message: 'QR already exists' });

  } catch (error) {
    console.log(error.message)
  }
};

export const getQR = async (req, res) => {
 
  const userData = await QR.findOne({ user : req.body.user });  

  if(!userData) return

  const qrImage = await QRCode.toDataURL(userData._id.toString());
  res.json({ qr : qrImage, status : userData.status});
}

export const scanQR = async (req, res) => {

  try {

    const updatedQR = await QR.findOneAndUpdate(req.body, { status: 'check-in' }, { new: true }).populate('user', 'username picture email');
    
    if(!updatedQR) {
      return res.status(404).json({ message: 'QR code not found'}); 
    }

    res.status(200).json(updatedQR);

  } catch (error) {
    res.status(500).json({ error : error.message });
  }
}

