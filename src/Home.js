// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewsArticles from './HomeFeed'


const Home = () => {
    return (
        <div>
            <h2>Top News for You</h2>
            <NewsArticles />
        </div>
        )
}

export default Home;