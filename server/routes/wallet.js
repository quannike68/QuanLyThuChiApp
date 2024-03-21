const express = require('express');
const router = express.Router();

const {
  CreactUpdateWallet,
} = require('../controller/Wallets/walletController');

router.post('/createUpdateWallet' , CreactUpdateWallet);

module.exports = router;
