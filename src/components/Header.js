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
                        <a className="name-logo-link" href="#home-id">
                        <img className="name-logo-icon" src="/images/name-logo2.png" alt="Name Logo"/>
                        <div className="header-name">Sainath Talakanti</div>
                        </a>
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li className="sub-nav-links"><a className="link" href="#home-id">Home</a></li>
                            <li className="sub-nav-links"><a className="link" href="#about-id">About</a></li>
                            <li className="sub-nav-links"><a className="link" href="#experience-id">Experience</a></li>
                            <li className="sub-nav-links"><a className="link" href="#projects-id">Projects</a></li>
                            <li className="sub-nav-links"><a className="link" href="#skills-id">Skills</a></li>
                            <li className="sub-nav-links"><a className="link" href="#education-id">Education</a></li>
                            <li className="sub-nav-links"><a className="link" href="#contact-id">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            );
}

export default Header;