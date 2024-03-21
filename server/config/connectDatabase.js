const mongoose = require('mongoose');
require('dotenv').config();

const connectData = async () => {
  const urlServerLocal = process.env.serverlocal;
  try {
    const connect = await mongoose.connect(urlServerLocal);
    console.log(`mongodb connect ${connect.connection.host}`);
  } catch (error) {
    console.log('connect error database');
  }
};
module.exports = connectData;
