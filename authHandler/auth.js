const express = require('express');
//const config = require('../config/index');
const jwt = require('jsonwebtoken');
const app = express();

exports.auth = async (req, res,next) => {
    const token = req.headers.token;
    let isValid = false;
    jwt.verify(token, process.env.JWT_SECRET, (error, res) => {
        if (res) {
            isValid = true;
        }
    });
    if (!isValid) {
        return res.status(401).json({ success: false, error: { code: 401, message: 'UNAUTHORISED ACCESS' } });
    }
    else    {
        return res.status(200);
    }
    next();
};