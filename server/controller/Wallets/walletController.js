const walletModel = require('../../model/walletModel');

//Creact, Update
const CreactUpdateWallet = async (req, res) => {
  const { _id, name, amount } = req.body;
  try {
    if (_id) {
      const findWallet = await walletModel.findById({ _id });
      if (findWallet) {
        findWallet.name = name || findWallet.name;
        findWallet.amount = amount || findWallet.amount;
        findWallet.userId = findWallet.userId;
        await findWallet.save();
        return res.status(200).json({ message: 'chinh sua thanh cong', success: true });
      } else {
        return res.status(400).json({ message: 'Vi khong ton tai' });
      }
    } else {
      const findNameWallet = await walletModel.findOne({ name });
  
      if (!findNameWallet) {
        const newWallet = new walletModel({ name, amount , userId : req.user._id });
        await newWallet.save();
        return res
          .status(200)
          .json({ message: 'Tao vi thanh cong', success: true });
      } else {
        return res
          .status(400)
          .json({ message: 'Vi da ton tai', success: false });
      }
    }
  } catch (error) {
    // return res.status(500).json({ message: 'server error' });
  }
};

//GetAllWallet
const GetAllWallet = async (req, res) => {
  try {
    const FindAll = await walletModel.find({deleteMark : false});
    if (FindAll) {
      return res.status(200).json({ success: true, FindAll });
    } else {
      return res.status(400).json({ success: false, message: 'server error' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' });
  }
};

//delete Wallet
const DeleteWallet = async (req, res) => {
  const { _id } = req.body;

  try {
    const findWallet = await walletModel.findById(_id);
    const checkDeleteWallet = findWallet.deleteMark;

      if (findWallet) {
        if(!checkDeleteWallet){
        findWallet.deleteMark = true;
        findWallet.deletedAt = new Date();
        findWallet.save();
        return res
          .status(200)
          .json({ message: 'Xoa Vi thanh cong', success: true, findWallet });
        }else{
            return res
            .status(400)
            .json({ message: 'Vi khong ton tai', success: false });
        }
      } else {
        return res
          .status(400)
          .json({ message: 'server error', success: false });
      }
  } catch (error) {
    return res.status(500).json({ message: 'server error', success: false });
  }
};

module.exports = {
  CreactUpdateWallet,
  GetAllWallet,
  DeleteWallet,
};
