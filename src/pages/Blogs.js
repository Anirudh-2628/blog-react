import React, { useEffect } from "react";
import '../css/main.css'
import Blog from "../component/Blog_arr";
import autosize from "autosize";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Blogs() {
    const [tweet, setTweet] = React.useState('');

    const tweetSubmit = () => {
        Axios.post('http://localhost:3001/api/insert', {tweet: tweet}).then(() => {
            window.location.reload();
        })
    };
    return (
        <>
            <div className="tweet-write">
                <textarea id="story" name="story" rows ="3" cols="53" onChange={(e) => {
                    setTweet(e.target.value)
                }}>
                </textarea>
                    {document.addEventListener('DOMContentLoaded', function () {
                        autosize(document.querySelectorAll('#story'));
                    }, false)}

                    
                <div>
                    <a href="/" onClick={tweetSubmit}>TWEET</a>
                </div>
            </div>
            
            <div className="tweet-container">
                <Blog />
            </div>
        </>
    )
}   