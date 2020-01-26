const bcrypt=require('bcrypt')
const SHA256 = require('crypto-js/sha256');

module.exports.hashPassword=async(password)=>{
const saltRounds = 10
 return new Promise((resolve,reject)=>{
 bcrypt.genSalt(saltRounds, function (err, salt) {
  if (err) {
    reject(err)
  } else {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  }
})
}).catch((err)=>{
  return(err)
})
 }

module.exports.getHash=async(block)=>{
  return SHA256(block.index + block.previousHash + block.timestamp + block.data + block.nonce).toString();
}

module.exports.createGenisis=async(block)=>{
  var date=Date.now();
  var data={
    index: 0,
    timestamp:date,
    previousHash: 0,
    data: block.data,
    nonce:200
  }

data.hash=await this.getHash(data);
return data;
}

module.exports.createChain=async(userName,block)=>{
  var data={
    userName:userName,
    chain:[block]
  }
  return data;
}

module.exports.getLastBlock=async(userBlocks,currentBlock)=>{
  var block=JSON.stringify(userBlocks)
  var block=JSON.parse(block);
  var length=block.chain.length;
  var lastBlock=block.chain[length-1];

  var date=Date.now();
  var data={
    index: lastBlock.index+1,
    timestamp:date,
    previousHash: lastBlock.hash,
    data: currentBlock.data,
    nonce: lastBlock.nonce+1
  }

data.hash=await this.getHash(data);
return data;

  
}