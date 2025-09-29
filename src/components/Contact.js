// src/components/Contact.js
import React from 'react';
import "./Contact.css"

function Contact() {

    const handleSubmit = () =>{

    }

    return (
        <div className="contact">
            <h1 className="contact-heading">Contact Me!</h1>
            <div className="name">
                Full Name: <input placeholder="Type your name here..."/>
            </div>
            <div className="email">
                Email: <input placeholder="typeemail@email.com"/>
            </div>
            <div className="message">
                Massage: <input placeholder="Type your message here..."/>
            </div>
            <button className="submit"
            onSubmit={handleSubmit}>Submit</button>
        </div>
    );
}

export default Contact;
