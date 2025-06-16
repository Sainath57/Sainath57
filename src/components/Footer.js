import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="ps">
                <p className="ps1">Thank you for visiting my Portfolio! ❤️</p>
                <p className="ps2">This page is still under development 😉</p>
                <p className="ps3">Kindly visit again in few days ✌️</p>
            </div>
            <div className={"footer-container"}>
                <div className="copyright">
                    <img width="24" height="24" src="https://img.icons8.com/emoji/48/copyright-emoji.png" alt="copyright-emoji"/>Copyright 2025 Sainath Talakanti
                </div>
            </div>
        </div>
    );
}

export default Footer;