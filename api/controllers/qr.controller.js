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

  // const qr = await QR.find(req.body);  
  // res.status(200).json(qr);

  const qr = await QR.find().populate('user', 'username picture')
  res.status(200).json(qr);
}