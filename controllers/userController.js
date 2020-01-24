var userService=require('../services/userService');

exports.signUp=async(req,res)=>{
    console.log('user signup');
    var userData=await userService.signup(req.body);

    if(userData.success){
        res.status(200).json({ success: true, data:userData.data});
    }
    else{
        res.status(400).json({success:false,error:userData.error})
    }
    
}

exports.login=async(req,res)=>{
   var isVaildUser=await userService.login(req.params);
    console.log(isVaildUser);
    
   if(isVaildUser.success){
    res.status(200).json({ success: true, data:isVaildUser.data});
}
else{
    res.status(400).json({success:false,error:isVaildUser.error})
}


}