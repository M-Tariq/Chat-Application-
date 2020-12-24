const app = require("express")();
const User = require('../models/user.model');

exports.registerUser = async (req, res, next) => {
    console.log("register user screen");
    const user={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    };
    console.log(user);
    const res1=await User.insertMany(user);
    console.log(res1);
}
exports.signinUser = async (req, res, next) => {
const email=req.body.email;
const password=req.body.password;
    const u = await User.findOne({ email: email, password: password }).exec();
    if (u) {
        res.send(u);
    } else {
        res.send("User not found")
    }
}
