const { query } = require('express');
const express = require('express')
const app = express()
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'anirudh2628*',
    database: 'blog-react'
});



// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "anirudh2628*",
//     database: 'test'
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected")
// });

app.get('/', (require, res) => {
    
});


app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});