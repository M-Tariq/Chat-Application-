const express=require('express');
const validator=require('validator');
const mongoose=require('mongoose');
const messageSchema=new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    time:{
    }
});

const Message=mongoose.model('Message', messageSchema);
module.exports=Message;

