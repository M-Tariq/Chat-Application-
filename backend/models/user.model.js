const mongoose = require('mongoose');
var validator = require('validator');
// import validator from 'validator';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid!");
            }
        }
    },
    password: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Weak Password!")
            }
        }
    },
    userName: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3
    }

});



const User = mongoose.model('User', userSchema);
module.exports=User;

// const user = new User({
//     name: "Tariq",
//     email: "tariq@gmail.com",
//     password: "pakistan123",
//     userName: "tariq"
// });
// user.save().then((user) => {
//     console.log("data saved! " + user);
// }).catch((error) => {
//     console.log(error);
// });