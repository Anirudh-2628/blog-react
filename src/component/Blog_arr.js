import React from "react";
import '../css/main.css'
// var mysql = require('mysql');

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


export default function Blog(){
    return(
        <>        
            <div className="blog">
                <div className="blog-title">THIS IS BLOG 1</div>
                <div className="blog-content">this is my first blog and hope you guys like my blog</div>
            </div>
            <div className="blog">
                <div className="blog-title">THIS IS BLOG 1</div>
                <div className="blog-content">this is my first blog and hope you guys like my blog</div>
            </div>
            <div className="blog">
                <div className="blog-title">THIS IS BLOG 1</div>
                <div className="blog-content">this is my first blog and hope you guys like my blog</div>
            </div>
        </>

    )
}