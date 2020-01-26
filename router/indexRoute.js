var express = require('express');
var router = express.Router();


let userController = require('../controllers/userController')
let blockController=require('../controllers/blockController')
let chainController=require('../controllers/chainController')

router.route('/login/username/:userName/password/:password').get(userController.login);
router.route('/signup').post(userController.signUp);
router.route('/blockchain').post(blockController.addBlock);
router.route('/blockChain/username/:userName').get(blockController.getBlocks);
router.route('/chain').post(chainController.addToChain);


module.exports = router;