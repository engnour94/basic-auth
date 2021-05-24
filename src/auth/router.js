
'use strict';
const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const User = require('./models/users-model');
const basicAuth = require('./middleware/basic');
router.post ('/signup' , signUp);
router.post('/signIn', basicAuth, signInFunction);
const rounds = 10;

async function signUp (req,res){
  try {
    const {username , password} = req.body;
    const hash = await bcrypt.hash (password, rounds);
    const user = new User ({
      username : username,
      password : hash,
    });
    const record = await user.save();
    res.status (201).json(record);
  } catch (error) {
    res.status(403).json ({ error : error.message});
  }
}

async function signInFunction(req, res) {
  res.status(200).json(req.user);
}

module.exports = router;

