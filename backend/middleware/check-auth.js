const jwt = require('jsonwebtoken');
let secretKey = "tariq";

module.exports = (req, res, next) => {
    // const token=req.query.auth;
    try {
        const token = req.headers.autorization.split(" ")[1]; //token is on 2nd index
        jwt.verify(token, secretKey);

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed!"
        });
    }


};


// const wait = (time) => 
// new Promise(
//     (resolve) => 
//     setTimeout(resolve, time)
//     );

// wait(3000)
// .then(() => 
// console.log('Hello!')); 
// // 'Hello!'