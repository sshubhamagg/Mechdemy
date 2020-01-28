var userModel = require('../models/userModel');
var index = require('../utils/index');
var bcrypt = require('bcrypt');
var _ = require('lodash');

module.exports.signup = async (data) => {

    var user = await this.findUser(data.userName);
    if (_.isNull(user.data)) {
        return new Promise(async (resolve, reject) => {
            let userObject = new userModel(data);
            var pass = await index.hashPassword(data.password);
            userObject.password = pass;
            userObject.save((error, response) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve({ success: true, data: response });
                }
            })
        }).catch((error) => {
            return { success: false, error: error }
        });
    }
    else {
        return ({ success: false, error: 'Username already exists' })
    }
};


module.exports.login = async (data) => {
    return new Promise(async (resolve, reject) => {
        userModel.findOne({ userName: data.userName }, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                if (_.isNull(response)) {
                    return reject({ success: false, error: 'user not found' })
                }
                else {
                    bcrypt.compare(data.password, response.password, function (err, result) {
                        if (result == true) {
                            resolve({ success: true, data: response })
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


module.exports.findUser = async (userName) => {
    return new Promise(async (resolve, reject) => {
        userModel.findOne({ userName: userName }, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve({ success: true, data: response })
            }
        })
    }).catch((error) => {
        return ({ success: false, error: error })
    })
}