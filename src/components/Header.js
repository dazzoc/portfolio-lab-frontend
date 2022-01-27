import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="Header">
            <div className="logo">
                <h1>My Portfolio Page</h1>
            </div>
            <nav className="nav-links">
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;