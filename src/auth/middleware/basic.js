
'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const User = require('../models/users-model');

module.exports = async (req, res, next) => {

  try {
    // Basic base64-encoded-string
    console.log('authorization headers value ', req.headers.authorization);
    const encoded = req.headers.authorization.split(' ')[1];
    console.log('encoded', encoded);
    const decoded = base64.decode(encoded);
    console.log('decoded', decoded);
    const [username, password] = decoded.split(':');
    const user = await User.findOne({ username });
    if (user){
      const isValid = await bcrypt.compare(password, user.password);
      if(isValid){
        req.user=user;
        // res.status(200).json(user);
        next();
      }else{
        next({message: 'Password is wrong'});
      }
    }else{
      res.status(403).send('Username is invalid');
    }        
  } catch (error) {
    res.status(403).send(`Error: Invalid Login`);
  }
};


