import React, { useEffect } from "react";
import '../css/main.css'
import Tweet from "../component/Tweet";
import autosize from "autosize";
import Axios from "axios";

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
                    <a onClick={tweetSubmit}>TWEET</a>
                </div>
            </div>
            
            <div className="tweet-container">
                <Tweet />
            </div>
        </>
    )
}   