import QR from "../models/qr.model.js";
import QRCode from 'qrcode';

export const createQR = async (req, res) => {

  let userData = await QR.findOne({ user : req.body.user })

  if(!userData) {
    const qr = new QR(req.body);
    userData = await qr.save();
  }

  const qrImage = await QRCode.toDataURL(userData._id.toString());
  res.json({ qr : qrImage, status : userData.status});
  // res.json(qrImage);
};

export const getQR = async (req, res) => {
  
  const qr = await QR.find(req.body).populate('user', 'username picture')
  res.status(200).json(qr);
  
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

