import React, { useRef } from "react";
import "./Header.css";

function Header() {

    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
                <header className="Header">
                    <div className="name-logo">
                        <a className="name-logo-link" href="#home">
                        <img className="name-logo-icon" src="/images/name-logo2.png" alt="Name Logo"/>
                        <div className="header-name">Sainath Talakanti</div>
                        </a>
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li className="sub-nav-links"><a className="link" href="#home">Home</a></li>
                            <li className="sub-nav-links"><a className="link" href="#about">About</a></li>
                            <li className="sub-nav-links"><a className="link" href="#experience">Experience</a></li>
                            <li className="sub-nav-links"><a className="link" href="#projects">Projects</a></li>
                            <li className="sub-nav-links"><a className="link" href="#skills">Skills</a></li>
                            <li className="sub-nav-links"><a className="link" href="#education">Education</a></li>
                            <li className="sub-nav-links"><a className="link" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            );
}

export default Header;