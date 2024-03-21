const express = require('express');
const jwt = require('jsonwebtoken');
const asyncHandle = require('express-async-handler');
const userModel = require('../../model/userModel');
require('dotenv').config();

//Check token
const Protec = asyncHandle(async (req, res, next) => {
  const authrization = req.headers.authorization;

  if (authrization && authrization.startsWith('Bearer')) {
    try {
      const token = req.headers.authorization.split(' ')[1];

      const userVerify = jwt.verify(token, `${process.env.key_access_token}`);

      const userId = userVerify._id;

      const userInfor = await userModel
        .findById({ _id: userId })
        .select('-password');

      req.user = userInfor._id;

      next();
    } catch (error) {
      return res.status(401).json(`token invalid `);
    }
  } else {
    return res.status(401).json('No authorization or no token');
  }
});

//Check isAdmin
const CheckAdmin = (req, res, next) => {
  if (req.user && req.user.Role) {
    next();
  } else
    return res
      .status(401)
      .json({ success: false, message: 'Ko co quyen truy cap' });
};

//accessToken//Cap token moi
const accessToken = async (req, res, next) => {
  const { refresh_token } = req.body;

  try {
    if (!refresh_token) {
      return res.status(400).json('Khong ton tai refresh_token');
    }

    const refreshVerify = jwt.verify(
      refresh_token,
      `${process.env.key_refresh_token}`,
    );
    const idVerify = refreshVerify._id;
    const findUser = await userModel.findById(idVerify).select('-password');

    if (!findUser) {
      return res.status(401).json({ message: 'User khong ton tai' });
    } else {
      const access_token = jwt.sign(
        { _id: findUser._id },
        `${process.env.key_access_token}`,
        { expiresIn: '10s' },
      );
      findUser.access_token = access_token;
      await findUser.save();
      res.status(200).json({
        success: true,
        message: 'Thay doi token thanh cong',
        findUser,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Connect server error' });
  }
};

module.exports = {
  Protec,
  CheckAdmin,
  accessToken,
};
