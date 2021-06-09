  
import Home from './Home.js'
import About from './About'
import Profile from './Profile.js'

import Nav from './Nav.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom'

const App = () => {
    return (
        <Router>
        <Nav />
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About} />
            <Route path="/Profile" component={Profile} />

        </Router>
    )


}

export default App;


/* 
Products page
Individual product page
View cart
Checkout page */
