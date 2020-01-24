var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
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