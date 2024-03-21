
const walletModel = require('../../model/walletModel')


//Creact, Update
const CreactUpdateWallet = async (req, res) => {
    const {name,amount} = req.body;
    try {
    const findWallet = await walletModel.findOne(name)
        if(findWallet){
            return res.status(400).json({message: "Ví đã tồn tại" , success : false})
        }else{
            findWallet.name = name ;
            findWallet.amount = amount ;
            await findWallet.save();
        return res.status(200).json({message: "Tao Vi thanh cong" , success : true})
        }
    } catch (error) {
        return res.status(500).json({message: "server error" , error})
    }
}

module.exports = {
    CreactUpdateWallet,

}