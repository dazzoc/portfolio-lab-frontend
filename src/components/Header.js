import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.scss";

function Header(props) {
    const [ navbar, setNavShow ] = useState(false);
    let userScrollY = window.scrollY;
    const controlNav = () => {
        if (userScrollY < window.scrollY) {
            setNavShow(true)
        } else {
            setNavShow(false)
        }
    };

    window.addEventListener('scroll', controlNav);
    
    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <Link to="/" className="logo-link">
                <h1 className="logo">DAZZO</h1>
            </Link>
            <nav className="nav-links">
                <Link to="/" className="home">
                    <div>HOME</div>
                </Link>
                <Link to="/about" className="about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects" className="projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;