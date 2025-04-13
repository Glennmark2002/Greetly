import QR from "../models/qr.model.js";

export const createQR = async (req, res) => {

  const newQR = new QR(req.body);

  try {
   
    await newQR.save();
    res.status(200).json(newQR);

  } catch (error) {
    res.status(500).json(error);
  }
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