var express = require('express');
var router = express.Router();

const {
  CreactUpdateWallet,
  GetAllWallet,
  DeleteWallet,
} = require('../controller/Wallets/walletController');

const { Protec, CheckAdmin, accessToken } = require('../middleware/auth/auth');

router.post('/createUpdateWallet', Protec , CreactUpdateWallet);
router.get('/getAllWallet', GetAllWallet);
router.post('/deleteWallet', DeleteWallet);

module.exports = router;
