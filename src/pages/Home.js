import React from "react";
import '../css/main.css'
import Blogs from "./Blogs";
export default function Home() {
    
    return(
        <>
            <div className="home-container">
                <p>Learn in Public</p>
                <p>Teach in Public</p>
                <p>Share your Experiences</p>
                <p><h1>INITIATIVE TO CONNECT CODING ENTHUSIAST'S FROM AROUND THE WORLD</h1></p>
            </div>
            <Blogs />
        </>
    )
}   