import {React, useState, useEffect, useContext} from 'react';

function NewsArticles(){
    const [news, setNews] = useState([
        { 
            title: "Winning at Life! :D",
            article: "There are many ways to do so...but the best is just try, try, try again!"
        },
        { 
            title: "Losing at Life! :(",
            article: "There are possibly many MORE ways to do so..."
        },
        { 
            title: "Breaking Even at Life! :|",
            article: "For when you are dealt a so-so hand."
        }
    ])
}


export default NewsArticles