var express = require('express');
var router = express.Router();

const {
  CreateUpdateUser,
  Login,
  GetUser,
  DeleteUser,
  
} = require('../controller/User/userControler');

const { Protec, CheckAdmin ,accessToken } = require('../middleware/auth/auth');

// const {Protec , CheckAdmin} = require('../middleware/auth/auth')

/* GET users listing. */
router.post('/registerUpdate', CreateUpdateUser);

router.post('/login', Login);

router.get('/getUserInfor', Protec, GetUser);

router.post('/deleteUser', Protec, DeleteUser);

router.post('/token', accessToken);

module.exports = router;
