'use strict';
const express = require('express');
const signUp= require('./auth/router.js');
const signIn= require('./auth/router.js');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');

const app = express();
app.use(express.json());
app.use(signUp);
app.use(signIn);
app.get('/', home);

function home(req,res){
  res.send('welcome to server.js');
}

app.get('/bad', badReq);
function badReq(req, res) {
  throw new Error('Something went wrong !!!!!');
}
app.use('*', notFoundHandler);
app.use(errorHandler);


function start (PORT){
  app.listen(PORT,()=>{
    console.log(`app is listening on PORT ${PORT}`);
  });
}
  
module.exports={
  app:app,
  start:start,
};