import React from "react";
import "./Home.css"

function Home() {

    const mailid = "sainathtalakanti09@gmail.com"
    const linkedin = "https://linkedin.com/in/sainathtalakanti//"
    const xUsername = "https://x.com/sainathtreddy"
    const github = "https://github.com/Sainath57"
    const resume = "Resumes/Sainath_Resume(SEDE).pdf"
    const phoneNumber = "+17635686663"

    return (
        <section id="home-id" className="Home">
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
                        <a className="resume-icon" href={resume}
                           alt={"Resume"} target="_blank" rel="noopener noreferrer">
                            <img width="100" height="100" src="https://img.icons8.com/clouds/100/resume.png"
                                 alt="resume"/>
                        </a>
                        <a className="linkedin-icon" href={linkedin}
                           alt={"sainathtalakanti}"} target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/linkedin.png"
                                 alt="linkedin"/>
                        </a>
                        <a className="gmail-icon" href={"mailto:"+mailid}
                           alt={"sainathtalakanti09@gmail.com"} target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/gmail--v1.png"
                                 alt="gmail--v1"/>
                        </a>
                        <a className="github-icon" href={github} alt={"Sainath57"}
                           target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/github--v1.png"
                                 alt="github--v1"/>
                        </a>
                        <a className="X-icon" href={xUsername} alt={"sainathtreddy"} target="_blank"
                           rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/twitterx--v1.png"
                                 alt="twitterx--v1"/>
                        </a>
                        <a className="call-icon" href={"tel:"+phoneNumber} alt={""} target="_blank"
                           rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/doodle/96/ringer-volume--v1.png"
                                 alt="ringer-volume--v1"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;