const currencyModel = require('../../model/currencyModel');

//Creact Update
const CreateUpdateCurrency = async (req, res) => {
  const { name } = req.body;
  try {
    const findCurrency = await currencyModel.findOne({ name });
    if (!findCurrency) {
      const newCurrency = new currencyModel({ name });
      await newCurrency.save();
      return res.status(200).json({ message: 'Tao thanh cong', seccess: true });
    } else {
      findCurrency.name = name;
      findCurrency.deleteMark = false;
      findCurrency.deletedAt = '';
      findCurrency.save();
      return res
        .status(200)
        .json({ message: 'Cap nhat thanh cong', success: true });
    }
  } catch (error) {
    return res.status(500).json({ message: 'server error', success: false });
  }
};
//GetAllCurrency
const GetAllCurrency = async (req, res) => {
  try {
    const findCurrency = await currencyModel.find({ deleteMark: false });
    console.log(findCurrency);
    if (!findCurrency) {
      return res.status(400).json({ message: 'server error ', success: true });
    } else {
      return res.status(200).json({ success: true, findCurrency });
    }
  } catch (error) {
    return res.status(500).json({ message: 'server error', success: false });
  }
};

//DeleteCurrency
const DeleteCurrency = async (req, res) => {
  const { name } = req.body;
  try {
    const findCurrency = await currencyModel.findOne({ name });
    if (findCurrency) {
      const checkDelete = findCurrency.deleteMark;
      if (checkDelete) {
        return res
          .status(400)
          .json({ message: 'Da xoa truoc do', success: false });
      } else {
        findCurrency.deleteMark = true;
        findCurrency.deletedAt = new Date();
        findCurrency.save();
        return res
          .status(200)
          .json({ message: 'Xoa thanh cong', success: true });
      }
    } else {
      return res.status(400).json({ message: 'Khong ton tai', success: false });
    }
  } catch (error) {
    return res.status(500).json({ message: 'server error', success: false });
  }
};

module.exports = {
  CreateUpdateCurrency,
  GetAllCurrency,
  DeleteCurrency,
};
