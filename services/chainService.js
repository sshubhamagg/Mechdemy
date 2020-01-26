var blockService=require('../services/blockService')
const _=require('lodash');
const utils=require('../utils/index')
const chainModel=require('../models/chainModel')


module.exports.addToChain=async(block)=>{
    return new Promise(async(resolve,reject)=>{
   var  userBlocks= await this.getChain(block.userName);  
   
    if(_.isNull(userBlocks.data)){
       
       var genesis=await utils.createGenisis(block);
        var chain=await utils.createChain(block.userName,genesis);
        var newChain=new chainModel(chain);   
   
        newChain.save((error,response)=>{
            if(error){
                reject(error)
            }
            else{
                resolve({success:true,data:response})
            }
        })
    }
    else{
        
        var lastBlock=await utils.getLastBlock(userBlocks.data,block);
        console.log(lastBlock);
        chainModel.update({userName:block.userName},{$push:{chain:lastBlock}},(error,response)=>{
            if(error){
                reject(error)
            }
            else{
                resolve({success:true,data:response})
            }
        })
        
    }
}).catch((error)=>{
    return({success:false,error:error})
})
}


module.exports.getChain=async(userName)=>{
       return new Promise(async(resolve,reject)=>{
        chainModel.findOne({userName:userName},(error,response)=>{
            if(error){
                reject(error)
            }
            else{
                resolve({success:true,data:response});
            }
        })
    }).catch((error)=>{
        return({success:false,error:error})
    })
}
