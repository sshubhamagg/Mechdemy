
var http_status_code=require('http-status-codes')
var chainService=require('../services/chainService')

module.exports.addToChain=async(req,res)=>{
  //  console.log(req.body);
    
    var block=await chainService.addToChain(req.body);
  
    if (block.success) {
        res.status(http_status_code.OK).json({ success: true, data: block.data});
    }
    else {
        res.status(http_status_code.BAD_REQUEST).json({ success: false, error: block.error })
    }
}

module.exports.getChain=async(req,res)=>{
    var chain=await chainService.getChain(req.params.userName);
    if (chain.success) {
        res.status(http_status_code.OK).json({ success: true, data: chain.data});
    }
    else {
        res.status(http_status_code.BAD_REQUEST).json({ success: false, error: chain.error })
    }

}