const express=require('express');
const router=express.Router();
const chatController=require('../controllers/chat.controller')
const checkAuth=require('../middleware/check-auth');

router.get("/:userId", chatController.getChat);
router.post("/sendmessage", checkAuth, chatController.sendMessage);
router.put("/sendmessage", checkAuth, chatController.deleteMessage);


module.exports=router;