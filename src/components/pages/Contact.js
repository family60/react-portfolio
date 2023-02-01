import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
//I ended up using "formsubmit" instead of email.js
export default function Contact() {
    return(
        <div className="contact-section">
            <div className="container">
                <h2>Contact Me</h2>
                <form target="_blank" action="https://formsubmit.co/el/makuto" method="POST">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                            </div>
                            <div className="col">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-dark btn-block">Send</button>
                </form>
            </div>
        </div>
    );
};