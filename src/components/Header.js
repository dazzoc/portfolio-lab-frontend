import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
    return (
        <header className="header">
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