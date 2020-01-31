const express = require('express');
//const config = require('../config/index');
const jwt = require('jsonwebtoken');
const app = express();
const constants=require('../utils/messageConstants')
exports.auth = async (req, res,next) => {
    const token = req.headers.token;
    let isValid = false;
   // console.log(token);
    
    jwt.verify(token, constants.JWT_SECRET, (error, res) => {
        if (res) {
            
            
            isValid = true;
        }
     //   console.log(res);
        

    });
    if (!isValid) {
        return {success:false,error:'UNAUTHORISED ACCESS'}
    }
    else    {
        return {success:true};
    }
    next();
};