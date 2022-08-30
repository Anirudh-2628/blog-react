import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
export default function User() {
    let { username } = useParams();
    
    const [user, setUser] = React.useState('')
    const [followers, setFollowers] = React.useState('')
    const [following, setFollowing] = React.useState('')

    React.useEffect(() => {
        Axios.get('http://localhost:3001/api/get-userProfile-data', {username: username}).then(
            (responce) => {
                setUser(username);
                setFollowing(responce.data.following)
                setFollowers(responce.data.followers)
            }
        )
    })
    console.log(user);
    console.log(followers);
    console.log(following);
    return(
        <><div>this is profile page for {username}</div></>
    )
}