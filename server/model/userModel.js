const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type : Number,
    required: true
  },
  status: {
    type : String 
  },
  sex: {
    type : String ,
    required : true ,
  },
  age: {
    type : Number ,
    required : true
  },
  Role:{
    type : Boolean ,
    default : false
  },
  access_token: {
    type: String ,

  },
  refresh_token: {
    type: String ,

  },
  deleteMark : {
    type : Boolean ,
    default : false
  },
  deletedAt : {
    type : Date ,
  }
}, {timestamps: true } );

userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;
  