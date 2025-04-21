import QR from "../models/qr.model.js";
import Archive from '../models/archive.model.js'
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
  
  try {
    const userData = await QR.findOne({ user : req.body.user });  

    if(!userData) return res.json('No QR')

    const qrImage = await QRCode.toDataURL(userData._id.toString());
    res.json({ qr : qrImage, status : userData.status});
    
  } catch (error) {
    res.json(error)
  } 
  
}

export const scanQR = async (req, res) => {

  try {

    const userData = await QR.findOne(req.body).populate('user', 'username picture email');  
    if(!userData) return res.status(404).json({message : 'QR code not found'});
  
    res.status(200).json(userData);
      
  } catch (error) {
    res.status(500).json({ error : error.message });
  }
}

export const updateQR = async (req, res) => {

  const userData = await QR.findOne(req.body);
  
  if(userData.status === 'pending') {
    await QR.findOneAndUpdate(req.body, {status : 'approved'},{ new: true  }); 
    res.status(200).json({ message : 'Data has been approved'});
  } else if(userData.status === 'approved') {
    const updatedData = await QR.findOneAndUpdate(req.body, { status : 'check in' }, {new : true})
    res.status(200).json(updatedData);
  } else { 

    try {
      const updatedData = await QR.findOneAndUpdate(req.body, { status : 'check out' }, {new : true})
      res.status(200).json(updatedData);
  
      const archiveData = new Archive(updatedData.toObject()); 
      await archiveData.save();
      await updatedData.deleteOne();
      
      res.json({ message : 'QR Deleted' })
  
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getArchiveQR = async (req, res) => {

  try {
    const user = await Archive.find({ user : req.body.user}).populate('user', 'username picture').sort({ deleteAt: -1 });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
}

export const getUserData = async (req, res) => {

  try {
    const userArchive = await Archive.find().populate('user', 'username picture email');
    res.json(userArchive);
    
  } catch (error) {
    res.json(error.message)
  }
}

export const getLogs = async (req, res) => {
  try {
    const logs = await QR.find().populate('user', 'username picture email' );  
    res.json(logs);
  } catch (error) {
    res.json(error.message)
  }
}


