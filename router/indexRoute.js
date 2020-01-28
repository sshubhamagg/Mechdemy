var express = require('express');
var router = express.Router();
var authenticate=require('../authHandler/auth').auth

let userController = require('../controllers/userController')
let chainController=require('../controllers/chainController')

router.route('/login/username/:userName/password/:password').get(userController.login);
router.route('/signup').post(userController.signUp);
router.route('/blockchain').post(chainController.addToChain);
router.route('/blockchain/username/:userName').get(chainController.getChain)

module.exports = router;