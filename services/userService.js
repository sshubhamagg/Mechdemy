var user=require('../models/userModel');
var index=require('../utils/index')

module.exports.signup=async(data)=>{
    console.log('saving signup details');
    return new Promise(async(resolve,reject)=>{
        let userObject=new user(data);
        var pass=await index.hashPassword(data.password);
        userObject.password=pass;
         userObject.save((error,response)=>{
            if(error){
                console.log(error);
                reject(error);
                }
                else{
                    resolve({success:true,data:response});
                }
        })
    }).catch((error)=>{
        return{success:false,error:error}
    });  
};


module.exports.login=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        console.log(data);
        
        user.findOne({userName:data.userName}, (error,response)=>{
            if(error){
                console.log(error);
                reject(error);
                }
                else{
                    console.log(response);
                    
                    resolve({success:true,data:response});
                    
                }
        })

    }).catch((error)=>{
        return{success:false,error:error}
    })
}