const User = require('../models/user.model');

exports.getChat = (req, res, next) => {
    //const users=await User.find({});
    res.send("/users request ~Get chat request");
}
exports.sendMessage=(req, res, next)=>{
    res.send("/users request ~send message route");

}

exports.deleteMessage=(req, res, next)=>{
    res.send("/users request ~delete message route");

}
