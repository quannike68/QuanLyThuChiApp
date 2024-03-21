var express = require('express');
var router = express.Router();

const {
  CreateUpdateCurrency,
  GetAllCurrency,
  DeleteCurrency
} = require('../controller/Currency/currencyController');

router.post('/CreateUpdateCurrency', CreateUpdateCurrency);
router.get('/getInforCurrency' , GetAllCurrency);
router.post('/deleteCurrency' ,DeleteCurrency )

module.exports = router;
