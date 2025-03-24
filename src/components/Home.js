import React from "react";
import "./Home.css"

function Home() {
    return (
        <div className="Home">
            <div className="home-container">
                <div className="profilepic-container">
                    <img className="profilePic" src="/images/profile-pic1.JPG" alt="Sainath Profile Picture"/>
                </div>
                <div className="intro">
                    <p className="intro1">Sainath R. Talakanti<sub>(SRT)</sub></p>
                    <br/>
                    <p className="intro2">Software Engineer | Java Full Stack Developer | DevOps Engineer</p>
                    <br/>
                    {/*<p className="intro3">Pleasure to have you here!</p>*/}
                    <br/>
                    <div className="platform-icons">
                        <a className="resume-icon">
                            <img width="100" height="100" src="https://img.icons8.com/clouds/100/resume.png"
                                 alt="resume"/>
                        </a>
                        <a className="linkedin-icon" href={"https://linkedin.com/in/sainathtalakanti//"}
                           alt={"sainathtalakanti}"} target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/linkedin.png"
                                 alt="linkedin"/>
                        </a>
                        <a className="gmail-icon" href={"mailto:sainathtalakanti09@gmail.com"}
                           alt={"sainathtalakanti09@gmail.com"} target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/gmail--v1.png"
                                 alt="gmail--v1"/>
                        </a>
                        <a className="github-icon" href={"https://github.com/Sainath57"} alt={"Sainath57"}
                           target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/github--v1.png"
                                 alt="github--v1"/>
                        </a>
                        <a className="X-icon" href={"https://x.com/sainathtreddy"} alt={"sainathtreddy"} target="_blank"
                           rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/twitterx--v1.png"
                                 alt="twitterx--v1"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="ps">
                <p className="ps1">Thank you for visiting my Portfolio! ❤️</p>
                <p className="ps2">This page is still under development 😉</p>
                <p className="ps3">Kindly visit again in few days ✌️</p>
            </div>
        </div>
    );
}

export default Home;