import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './NavBar.css'

const NavBar = () => {

    const [headerColor, setHeaderColor] = useState("transparent")

//Dynamic Nav Change Function From Transparent to Black // 
    const listenScrollEvent = () => {
        window.scrollY > 10
          ? setHeaderColor("black")
          : setHeaderColor("transparent")
    }
    
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })

    return (

        //Top of Site Nav// 
        <nav className="upperNav">
            <div style={{ backgroundColor: headerColor }} className="wrapper-Nav">
                <div className='logo'>Comprehensive World History</div>
                <ul>
                    <li><Link to="/AboutPage">About Page</Link></li>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/QuizPage">Quiz Page</Link></li>
                    <li><Link to="/Scoreboard">ScoreBoard</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;