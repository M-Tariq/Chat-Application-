const express=require('express');
const router=express.Router();
const chatController=require('../controllers/chat.controller')

router.get("/:userId", chatController.getChat);


module.exports=router;