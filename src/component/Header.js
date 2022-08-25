import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/main.css'
import Axios from "axios";

export default function Header() {
    Axios.defaults.withCredentials = true;
    const [loginStatus, setLoginstatus] = React.useState('');
    const [loginRedirect, setLoginredirect] = React.useState('/login');

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }
    React.useEffect(() => {
        Axios.get('http://localhost:3001/api/login').then((responce) => {
            console.log(responce);
            if (responce.data.loggedIn == true) {
                setLoginstatus(responce.data.user)
                setLoginredirect('/UserProfile');
            }
            else {
                routeChange();
            }
        })
    }, [])
    return (
    <>
        <nav className="navbar">
            <p className="nav-logo">code-blog</p>
            <ul className="nav-ul"> 
                <li className="nav-li border-bottom"><a><Link to='/'>HOME</Link></a></li>
                <li className="nav-li"><a><Link to='/tweets'>TWEETS</Link></a></li>
                <li className="nav-li"><a><Link to='/blogs'>BLOGS</Link></a></li>
                <li className="nav-li"><a><Link to='/Dimensions'>EXPLORE DIMENSIONS</Link></a></li>
                <li className="nav-li"><a><Link to='/Contribute'>CONTRIBUTE</Link></a></li>
            </ul>
            <div className="user-info">
                <img src="/img/user-icon1.png" width = '50px' alt="USER" className="navbar-logo-img" />
                <a><Link to={loginRedirect}>{loginStatus}</Link></a>  
            </div>
        </nav>
    </>
    )
}