// src/components/Contact.js
import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <div className="name">
                Full Name: <input placeholder="Type yuor name here..." />
            </div>
            <div className="email">
                Email: <input placeholder="typeemail@email.com" />
            </div>
            <div className="message">
                Massage: <input placeholder="Type your message here..." />
            </div>
        </div>
    );
}

export default Contact;
