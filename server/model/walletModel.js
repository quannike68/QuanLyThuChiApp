const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'user',
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
    },
    deleteMark: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: '',
    },
  },
  { timestamps: true },
);

const Wallet = mongoose.model('wallet', walletSchema);

module.exports = Wallet;
