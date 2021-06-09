// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import newsArticles from './HomeFeed'


const Home = () => {
    return (
        <div>
            <h2>Top News for You</h2>
            <newsArticles />
        </div>
        )
}

export default Home;