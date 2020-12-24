const express=require('express');
const mongoose=require('mongoose');

const chatSchema=new mongoose.model({
    messages:{
        type: Array
    }
});

const Chat=mongoose.model("Chat", chatSchema);
module.exports=Chat;