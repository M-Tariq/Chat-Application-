const express=require('express');
const router=express.Router();
const authController=require('../controllers/auth.controller')

router.post("/signup", authController.registerUser);
router.post("/signin", authController.signinUser);


module.exports=router;