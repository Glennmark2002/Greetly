import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const google = async (req, res) => {

  const user = await User.findOne({ email : req.body.email }); 

  if(user) {

    const token = jwt.sign({ id: user._doc }, process.env.SECRET);
    const { password: _password, ...rest } = user._doc;
    createCookie(token, rest, res);

  } else { 

    const hashed = bcrypt.hashSync(process.env.SECRET, 1);
    const newUser = new User({
      username : req.body.name,
      email : req.body.email, 
      password : hashed, 
      picture : req.body.photo
    });

    await newUser.save();   

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET); 
    const { password: _password2, ...rest} = newUser._doc;
    createCookie(token, rest, res);   
  }
};

export const signout = async (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout Success');
}

function createCookie(token, rest, res) {
  const expires = new Date(Date.now() + 3600000); 
  res.cookie('access_token', token, {
    htppOnly: true,
    expires 
  }).status(200).json(rest); 
}