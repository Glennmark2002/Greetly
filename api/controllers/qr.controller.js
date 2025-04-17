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

    const userData = await QR.findOne(req.body).populate('user', 'username picture email');  
    
    if(userData.status === 'pending') {

      if(!userData) return res.status(404).json({message : 'QR code not found'});
  
      res.status(200).json(userData);
    } else { 

      const updatedData = await QR.findOneAndUpdate(req.body, { status : 'check-in' }, {new : true})
      console.log(updatedData);
    }
  
  } catch (error) {
    res.status(500).json({ error : error.message });
  }
}

export const updateQR = async (req, res) => {
  await QR.findOneAndUpdate(req.body, {status : 'approved'},{ new: true  }); 
  res.status(200).json({ message : 'Data has been approved'});
}


