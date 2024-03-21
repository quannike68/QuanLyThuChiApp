const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true 
        },
        deleteMark: {
            type: Boolean ,
            default:  false
        },
        deletedAt : {
            type : Date,
            default : ""
        }
}, {timestamps: true});

currencySchema.pre('save', async function (next) {
    if(!this.isNew){
        return next();
    }
})

const Currency = mongoose.model('currency' , currencySchema) ; 

module.exports = Currency ;