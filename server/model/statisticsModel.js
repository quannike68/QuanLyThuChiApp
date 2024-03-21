const mongoose = require('mongoose');

const statisticsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    default : Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  expense : {
    type : Number,
    default : 0
  },
  revenue :{
    type : Number,
    default : 0
  },
  walletId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'wallet',
  },
  deleteMark : {
    type : Boolean ,
    default : false
  },
  deletedAt : {
    type : Date ,
  }
} , {timestamps: true }); 

statisticsSchema.pre('save', async (next) => {
  if (!this.isNew) return next();
});

const statistics = mongoose.model('statistics', statisticsSchema);

module.exports = statistics;
