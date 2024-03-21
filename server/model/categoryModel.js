const mongoose = require('mongoose') 


const categorySchema = new mongoose.Schema (
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'users',
          },
          name : {
            type : String ,
            required : true 
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
) ;

categorySchema.pre('save' ,async function (next){
    if(!this.isNew) return next() ;
})

const category = mongoose.model('categorys' ,categorySchema ) ;

module.exports = category ;
