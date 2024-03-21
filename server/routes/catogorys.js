const express = require('express');
const router = express.Router();

const {
  CreateUpdateCategory,
  GetCategory,
  DeleteCategories
} = require('../controller/Catogory/catogoryControler');

router.post('/CreateUpdateCategory', CreateUpdateCategory);
router.get('/GetCategory' , GetCategory);
router.post('/DeleteCategory' ,DeleteCategories )
module.exports = router;
