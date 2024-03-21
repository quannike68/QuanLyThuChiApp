const asyncHandle = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const userModel = require('../../model/userModel');

const CreateUpdateUser = async (req, res) => {
  const {
    _id,
    userName,
    email,
    password,
    name,
    phone,
    sex,
    age,
    access_token,
    refresh_token,
  } = req.body;
  if (!email || !password || !userName || !name || !phone || !sex || !age)
    return res
      .status(400)
      .json({ success: false, message: 'Nhap thieu du lieu' });

  try {

    //Cap nhat user
    if (_id) {
      const findUser = await userModel.findOne({ userName });
      if (findUser) {
        findUser.userName = userName || findUser.userName;
        findUser.email = email || findUser.email;
        findUser.password = password || findUser.password;
        findUser.name = name || findUser.name;
        findUser.phone = phone || findUser.phone;
        findUser.sex = sex || findUser.sex;
        findUser.age = age || findUser.age;
        findUser.access_token =  findUser.accessToken;
        findUser.refresh_token = findUser.refresh_token;

        await findUser.save() ;
        
        return res.status(200).json({
          success: true,
          message: 'update User success',
          findUser,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: 'Ko timf thay tai khoan',
        });
      }
    } 
    //Tao user
    else {
      const findUser = await userModel.findOne({ userName });
      if (!findUser) {
        const newUser = await userModel.create({
          userName,
          email,
          password,
          name,
          phone,
          sex,
          age,
          access_token,
          refresh_token,
        });

        if (newUser) {
          const accessToken = jwt.sign(
            { _id: newUser._id },
            `${process.env.key_access_token}`,
            { expiresIn: '10m' },
          );
          const refreshToken = jwt.sign(
            { _id: newUser._id },
            `${process.env.key_refresh_token}`,
            { expiresIn: '1y' },
          );

          newUser.access_token = accessToken;
          newUser.refresh_token = refreshToken;

          await newUser.save();


          res.status(200).json({
            success: true,
            message: 'Tao tai khoan thanh cong',
            newUser

          });
        }

      } else {
        return res
          .status(400)
          .json({ success: false, message: 'Tai khoan da ton tai' });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Internal server error', error });
  }
};

//Login
const Login = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json({ success: false, message: 'Missing username and/or password' });
  }

  try {
    const findAuth = await userModel.findOne({ userName });

    if (!findAuth)
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect username or password' });

    const passwordValid = await bcrypt.compare(password, findAuth.password);

    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect username or password' });
    }

    const accessToken = jwt.sign(
      { _id: findAuth._id },
      `${process.env.key_access_token}`,
      { expiresIn: '10m' },
    );

    const refreshToken = jwt.sign(
      { _id: findAuth._id },
      `${process.env.key_refresh_token}`,
      { expiresIn: '1y' },
    );

    findAuth.access_token = accessToken;
    findAuth.refresh_token = refreshToken;

    res.status(200).json({
      success: true,
      message: 'User login successfully',
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: 'false', type: 'login' });
  }
};

//Get All User
// const GetAllUser = async (req, res) => {
//   const FindAth = await userModel.find({}).select('-password');
//   return res.json(FindAth);
// };

//Get User
const GetUser = async (req, res) => {
  const { _id } = req.body;
  try {
    const findUser = await userModel.findById(_id).select('-password');

    if (findUser) {
      return res.status(200).json({ success: true, findUser });
    } else {
      return res
        .status(400)
        .json({ success: false, message: 'user not found' });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'connectDatabase error' });
  }
};
//delete user
const DeleteUser = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const findUser = await userModel.findById(_id).select('-password');

    const ckeckdeleteMark = findUser.deleteMark

    if(!ckeckdeleteMark) {
      findUser.deleteMark = true ;
      findUser.access_token = "";
      findUser.refresh_token = "";
      findUser.deletedAt = new Date("<YYYY-mm-dd>") ;
      findUser.save();
      return (
        res.status(200).json({message : "Xoa thanh cong" , success : true , findUser })
      )
    }else{
      return (
        res.status(400).json({message : "Tai khoan khong ton tai" , success : false }))
    }
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  }
};

module.exports = {
  CreateUpdateUser,
  Login,
  DeleteUser,
  GetUser,
};
