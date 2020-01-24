var express=require('express');
var router=express.Router();


let userController=require('../controllers/userController')

router.route('/login/username/:userName/password/:password').get(userController.login);
router.route('/signup').post(userController.signUp);



module.exports = router;