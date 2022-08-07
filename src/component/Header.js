import React from "react";
import { Link } from "react-router-dom";
import '../css/main.css'

export default function Header() {
    return (
    <>
        <nav className="navbar">
            <p className="nav-logo">code-blog</p>
            <ul className="nav-ul"> 
                <li className="nav-li, border-bottom"><a><Link to='/'>HOME</Link></a></li>
                <li className="nav-li"><a><Link to='/blogs'>BLOGS</Link></a></li>
                <li className="nav-li"><a><Link to='/Dimensions'>EXPLORE DIMENSIONS</Link></a></li>
                <li className="nav-li"><a><Link to='/Contribute'>CONTRIBUTE</Link></a></li>
            </ul>
            <div className="user-info">
                <img src="/img/user-icon1.png" width = '50px' alt="USER" className="navbar-logo-img" />
                <a href="../public/index.html">SIGN UP</a>  
            </div>
        </nav>
    </>
    )
}