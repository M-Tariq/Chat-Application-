const express=require("express");
const app=express();
const PORT=4000;
const mongoose=require('mongoose');
const bodyParser = require("body-parser")

//register routes
const authRoutes=require('./routes/auth.route');
const userRoutes=require('./routes/user.route');
const chatRoutes=require('./routes/chat.route');

//enable cors
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json())
app.use("/auth",authRoutes);
app.use("", userRoutes);
app.use("", chatRoutes);



//db connection
mongoose.connect('mongodb+srv://m220student:m220password@mflix.kgcjp.mongodb.net/chatapp',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected!");
    }).catch(error => {
        console.log(error);
    });


//set cors to make available
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); //for only fetch and create data
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


//server
app.listen(PORT, (req, res, next)=>{
    console.log(`Chat server is listening at http://localhost:${PORT}`)
});

