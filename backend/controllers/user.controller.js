const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    const users=await User.find({});
    res.send(users);
}
exports.getActiveUsers = async (req, res, next) => {
    const activeUsers=await User.find();
    res.send(activeUsers);
}