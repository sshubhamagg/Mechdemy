const bcrypt=require('bcrypt')

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


