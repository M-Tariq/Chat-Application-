const bodyParser = require("body-parser");
const User = require('../models/user.model');
const jwt=require('jsonwebtoken');
const constants = require("../constants/const");

exports.registerUser = (req, res) => {
    // console.log(req.body);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    });
    console.log(user);
    user.save()
    .then(result=>{
        return res.status(201).json({
            message: "User created successfully!",
            result: result
        });
    })
    .catch(error=>{
        return res.status().json({
            message: "error: ",
            error: error
        });
    })

}
exports.signinUser = (req, res, next) => {

    let fetchedUser;
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);
    User.findOne({ email: email }).then(user => {
        fetchedUser=user;
        if (password != user.password) {
            return res.status(401).json({
                message: "Password incorect!"
            });
            
        } else {
          //jsonwebtoken
          const token=jwt.sign({email: fetchedUser.email, userId: fetchedUser._id},
             constants.SECRET_KEY, 
             {expiresIn:"1h"});
          return res.status(200).json({
              message: "User logged in successfully!"
          });
        }
    }).catch(error => {
        return res.status(404).json({
            message: "error: User not exist, Please signup first!",
            error: error
        });
    })
}
