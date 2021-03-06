'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');


mongoose
  .connect(process.env.MONGOOSE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((e) => {
    console.log('CONNECTION_ERROR', e.massage);
  });

/* connect mongo with our server
*  sudo service mongodb start
*  sudo service mongodb status
*  sudo service mongodb stop
*/ 