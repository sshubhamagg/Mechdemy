var mongoose=require('mongoose');
const validator = require('validator');

var userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate: [
            {
                validator: value => validator.isEmail(value),
                message: '{VALUE} is not a valid emailId!',
            },
        ],
    },
    phone:{
        type:String,
        required:true,
        validate: [
            {
                validator: value => utils.isValidNumber(value),
                message: '{VALUE} is not a valid Mobile number!'
            }
        ]
    },
    userName:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }

})

module.exports= mongoose.model('user',userSchema);