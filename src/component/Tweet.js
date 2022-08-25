import React from "react";
import '../css/main.css'
import Axios from "axios";

export default function Tweet(){
    
    const [tweetFetch, setTweetfetch] = React.useState([])

    React.useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then(
            (result) => {
                console.log(result)
                setTweetfetch(result.data)
            }
        )
    }, [])

    const tweetMap = tweetFetch.slice(0).reverse().map((value) => {
        if (value.id > 0) {
            return <div className="tweet">
                        <div className="tweet-info">
                            <img src="/img/user-icon1.png" width = '25px' alt="USER" className="tweet-user-img" />
                            <p>ANIRUDH PATEL {value.date}</p>
                            <div className="tweet-more-options">
                                <span className="material-symbols-outlined">more_vert</span>
                            </div>
                        </div>
                        <div className="tweet-content">
                            <p>{value.tweet}</p>
                        </div>
                        <div className="tweet-control">
                            <div className="tweet-control-1">
                                <span class="material-symbols-outlined">favorite</span>
                            </div>
                            <div className="tweet-control-2 border-left border-right">
                                <span class="material-symbols-outlined ">comment</span>
                            </div>
                            <div className="tweet-control-3">
                                <span class="material-symbols-outlined">share</span>
                            </div>
                        </div>
                    </div>
        }
        else {
            return <></>
        }
    })


    return(
        <>        
            {tweetMap}            
        </>

    )
}
