const app = require("express")();
const User = require('../models/user.model');

exports.getChat = async (req, res, next) => {
    //const users=await User.find({});
    res.send("Get chat request");
}
