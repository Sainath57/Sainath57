import React from "react";
import "./Home.css"

function Home() {
    return (
        <div className="Home">
            <div className="profilepic-container">
                <img className="profilePic" src="/images/profile-pic1.JPG" alt="Sainath Profile Picture"/>
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