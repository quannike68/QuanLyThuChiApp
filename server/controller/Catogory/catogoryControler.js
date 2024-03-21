const catogoryModel = require('../../model/categoryModel');

//CreateUpdateCategory
const CreateUpdateCategory = async (req,res) => {
    const {name} = req.body;
    try {
        const findCategory = await catogoryModel.findOne({name})
        if(!findCategory) {
        const newCategory = await catogoryModel.create({name})
        return res.status(200).json({message : "Tao giao dich thanh cong" ,success:  true , newCategory } )
        }else{
            const CheckCategory = findCategory.deleteMark
            console.log(CheckCategory);
            if(!CheckCategory){
                findCategory.name = name ;
                findCategory.save();
            return res.status(200).json({message: "cap nhat giao dich thanh cong" , success :  true}) 
            }else{
                findCategory.name = name ;
                findCategory.save();
                return res.status(200).json({message: "Tao giao dich thanh cong" , success :  true}) 
            }

        }
    } catch (error) {
        return res.status(500).json({message: "server error" , success :  false}) 
    }
}

//getCategory
const GetCategory = async (req ,res) => {
    try {
        const findAll = await catogoryModel.find({deleteMark : false});
        console.log(findAll);
        if(findAll){
            if(findAll==""){
                return res.status(400).json({success : false , message : "Khong co giao dich nao" })
            }
            return res.status(200).json({success : true , findAll })
        }
        else{
            return res.status(400).json({success : false , message : "loi tim kiem" })
        }
    } catch (error) {
        return res.status(500).json({success : false , message : "server error" })
    }
}


//Delete categoriesGroup
const DeleteCategories = async (req , res) => {
    const {name} = req.body;
    try {
        const findCategory = await catogoryModel.findOne({name});
        if(findCategory) {
            if(!findCategory.deleteMark){
            findCategory.deleteMark = true;
            findCategory.deletedAt = new Date();
            findCategory.save();
        return res.status(200).json({message : "Xoa thanh cong" , success : true})
        }else{
            return res.status(400).json({message : "Giao dich khong ton tai" , success : false})
        }
    }else {
            return res.status(400).json({message : "Giao dich khong ton tai" , success : false})
        }
    } catch (error) {
        return res.status(500).json({message : "server error" , success : false})
    }
}
module.exports = {CreateUpdateCategory, GetCategory , DeleteCategories};
