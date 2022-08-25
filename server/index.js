const bodyParser = require('body-parser');
const { query } = require('express');
const express = require('express')
const app = express()
const mysql = require('mysql');
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'anirudh2628*',
    database: 'blog-react',
    charset: 'utf8mb4',
    collatiom: 'utf8mb4_unicode_ci'
});


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


app.use(session(
    {
        key: "user",
        secret: "anirudh2628*",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    }
));
const saltLevel = 10;

app.post('/api/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, saltLevel, (err, hash) => {
        const sqlQuery = 'INSERT INTO users (username, password) VALUES (?,?)';
        db.query(sqlQuery, [username,hash], (error, responce) => {
            console.log("USER REGISTERED")
        })
    })
    const sqlQuery1 = ` CREATE TABLE ${username} ( 
        id int AUTO_INCREMENT PRIMARY KEY,
        tweet varchar(500),
        date date,
        time time,
        followers int,
        following int,
        bio varchar(60))
        ;`;
    db.query(sqlQuery1, (err, resp) => {
        console.log("USER TABLE MADE")
        req.session.user = username
        console.log(req.session.user)
        res.send(username)
    });
})


app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlQuery = "SELECT * FROM users WHERE username = ?;";
    db.query(sqlQuery, username, (err, responce) => {
        if (responce.length > 0) {
            bcrypt.compare(password, responce[0].password, (error, result) => {
                if (result) {
                    req.session.user = responce[0].username
                    console.log(req.session.user)
                    res.send(responce); 
                }
                else {
                    res.send({message: "INCORRECT PASSWORD!"});
                }
            })
        }
        else {
            res.send({message: "NO USER FOUND"});
        }
    })
})


app.get('/api/login', (req,res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }
    else {
        res.send({loggedIn: false})
    }
})


app.get('/api/get', (req, res) => {
    const sqlQuery = "SELECT * FROM USER_TWEETS";
    db.query(sqlQuery, (err, responce) => {
        res.send(responce)
    });
})


app.post('/api/insert', (require, res) => {
    const tweet = require.body.tweet;
    const sqlQuery = "INSERT INTO user_tweets (tweet) VALUES (?)";
    db.query(sqlQuery, [tweet], (err, result) => {
        res.send(result)
    });
});


app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});