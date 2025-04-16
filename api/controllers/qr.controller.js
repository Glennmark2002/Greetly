import QR from "../models/qr.model.js";
import QRCode from 'qrcode';
import moment from 'moment';

export const createQR = async (req, res) => {

  try {

    const { user, appointmentDate, ...rest } = req.body; 
    const formatDate = moment(appointmentDate).format('MMM D, YYYY, h:mm A');
    const qr = new QR({ user, appointmentDate: formatDate, ...rest });
    await qr.save()
      
  } catch (error) {
    console.log(error.message)
  }
  

  // let userData = await QR.findOne({ user : req.body.user })

  // if(!userData) {
  //   const qr = new QR(req.body);
  //   userData = await qr.save();
  // }

  // const qrImage = await QRCode.toDataURL(userData._id.toString());
  // res.json({ qr : qrImage, status : userData.status});
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

