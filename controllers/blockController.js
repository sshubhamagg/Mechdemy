// var blockService=require('../services/blockService')

// module.exports.addBlock=async(req,res)=>{
//     var block=await blockService.addBlock(req.body);
  
//     if (block.success) {
//         res.status(200).json({ success: true, data: block.data });
//     }
//     else {
//         res.status(400).json({ success: false, error: block.error })
//     }
// }
// module.exports.getBlocks=async(req,res)=>{
//     var blocks=await blockService.getBlocks(req.params.userName);   
//     if(blocks.success){
//         res.status(200).json({success:true,data:blocks.data})
//     }
//     else{        
//         res.status(400).json({success:false,error:blocks.error})
//     }
// }