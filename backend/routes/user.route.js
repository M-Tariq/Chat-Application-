const express=require('express');
const router=express.Router();
const userController=require('../controllers/user.controller')

router.get("/users", userController.getAllUsers);
router.get("/active/users", userController.getActiveUsers);


module.exports=router;