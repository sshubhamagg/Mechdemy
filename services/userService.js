var user = require('../models/userModel');
var index = require('../utils/index');
var bcrypt = require('bcrypt');


module.exports.signup = async (data) => {
    console.log('saving signup details');
    return new Promise(async (resolve, reject) => {
        let userObject = new user(data);

        var pass = await index.hashPassword(data.password);
        userObject.password = pass;
        userObject.save((error, response) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            else {
                resolve({ success: true, data: response });
            }
        })
    }).catch((error) => {
        return { success: false, error: error }
    });
};


module.exports.login = async (data) => {

    //console.log('============',user);
    
    return new Promise(async (resolve, reject) => {
        console.log('data', data);
        user.findOne({ userName: data.userName }, (error, response) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            else {
                if (response == null) {
                    console.log('user not found');
                    return ({ success: false, error: 'user not found' })
                }
                else {
                    bcrypt.compare(data.password, response.password, function (err, result) {
                        if (result == true) {
                            resolve({ success: true, data: "user verified" })
                        } else {

                            return reject({ success: false, error: "username and password do not match" });
                        }
                    });
                }
            }
        })

    }).catch((error) => {
        return { success: false, error: error }
    })
}