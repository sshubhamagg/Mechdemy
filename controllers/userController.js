
var http_status_code=require('http-status-codes')
var userService = require('../services/userService');
var jwt=require('jsonwebtoken')

exports.signUp = async (req, res) => {
    console.log('user signup');
    var userData = await userService.signup(req.body);

    if (userData.success) {
        res.status(http_status_code.OK).json({ success: true, data: userData.data });
    }
    else {
        res.status(http_status_code.BAD_REQUEST).json({ success: false, error: userData.error })
    }

}

exports.login = async (req, res) => {
    var isValidUser = await userService.login(req.params);
    
    if (isValidUser.success) {
        const token = jwt.sign({ data: isValidUser.data }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME });

        res.status(http_status_code.OK).json({ success: true, data: isValidUser.data,token:token });
    }
    else {
        res.status(http_status_code.BAD_REQUEST).json({ success: false, error: isValidUser.error })
    }


}