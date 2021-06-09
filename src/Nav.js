 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => {
    return (
        // <Router>
            <nav>
                <ul>
                    <Link to="/home">
                            <h2>Home</h2>
                    </Link>
                    <Link to="/about">
                            <h2>About</h2>
                    </Link>
                    <Link to="/profile">
                            <h2>Profile</h2>
                    </Link>

                </ul>
            </nav>
        // </Router>
    )
}

export default Nav;

/* const Nav = () => {
    return (
       <nav>
           <ul>
                <Link to="/about">
                    <h2>About</h2>
                    </Link>
                    <Link to="/shop">
                    <h2>Shop</h2>
                    </Link>
           </ul>
       </nav>
    ) //using links - assist with avoiding re-rendering
} */