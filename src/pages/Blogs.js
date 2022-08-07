import React from "react";
import '../css/main.css'
import Blog from "../component/Blog_arr";

export default function Blogs() {
    return(
        <>
            {/* <Header /> */}
            <div className="blog-container">
                <Blog />
            </div>
        </>
    )
}   