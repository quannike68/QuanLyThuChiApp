const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
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

walletSchema.pre('save', async function(next) {
  if (!this.isNew)
    return next(); 
});

const Wallet = mongoose.model('wallets', walletSchema);

module.exports = Wallet;