// var _=require('lodash');
// var utils=require('../utils/index')
// var blockModel=require('../models/blockModel');




// module.exports.addToChain=async(block)=>{
//     return new Promise(async(resolve,reject)=>{
//         if(!blockExists){

//         }
//         else{

//         }
//     })
// }

// module.exports.addBlock=async(block)=>{
//     return new Promise(async(resolve,reject)=>{
//         var newBlock=new blockModel(block);
//         newBlock.hash= await utils.getHash(block);
//         newBlock.save((error,response)=>{
//             if(error){
//                 console.log(error);                
//                 reject(error)
//             }
//             else{
//               //  console.log(response);    
//                 resolve({success:true,data:response})
//             }
//         })
//     }).catch((error)=>{
//         return{succeess:false,error:error}
//     })
// }


// module.exports.getBlocks=async(userName)=>{   
//     return new Promise(async(resolve,reject)=>{
//     blockModel.find({userName:userName},(error,response)=>{
//         if(error){
//             reject(error)
//         }
//         else{
//             if(_.isEmpty(response)){
//                  reject({ success: false, error: "no blocks found" });
//             }
//             else{
//                 resolve({success:true,data:response})
//             }
//         }
//     })
//     }).catch((error)=>{
//         return({succeess:false,error:error})
//     })
// }