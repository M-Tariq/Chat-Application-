const app = require("express")();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())  

//register routes
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const chatRoutes = require('./routes/chat.route');

app.use("/auth", authRoutes);
app.use("", userRoutes);
app.use("", chatRoutes);
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));           
//enable cors

//import constant
const constants = require('./constants/const');


//db connection
mongoose.connect(constants.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Databse Connected!");
        http.listen(constants.PORT, () => {
            console.log(`Chat server is listening at http://localhost:` + constants.PORT);
        });

    }).catch(error => {
        console.log(error);
    });

//socket setup
var io = require('socket.io')(http, {
    cors: {
        origin: '*',
        credentials: true,
        methods: ["GET", "POST"],
        credentials: true
    }
});


// io.on('connection', (socket) => {
//     console.log('a user connected!');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
//     //msg
//     socket.on('my message', msg => console.log("msg: " + msg));

// });