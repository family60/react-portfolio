import React, {useState} from "react";
import emailjs from '@emailjs/browser';
//I ended up using "formsubmit" instead of email.js
export default function Contact() {
    
    const [formState, setFormState] = useState({ name: "", email: "", message: ""});
    const { name, email, message } = formState;
    //error message
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
                if(!isValid) {
                    setErrorMessage("Your email is invalid");
                } else {
                    setErrorMessage("");
                }
            //checking if name and message has input 
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage("");
                } 
        }
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    //validate email regex
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //form submit handler
    function handleSubmit(e) {
        e.preventDefault();
    }
    return(
        <div className="contact-section">
            <div className="container">
                <h2>Contact Me</h2>
                <form target="_blank" action="https://formsubmit.co/el/makuto" method="POST">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="name" className="form-control" placeholder="Full Name" required onBlur={handleChange}/>
                            </div>
                            <div className="col">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" required onBlur={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required onBlur={handleChange}></textarea>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className="btn btn-lg btn-dark btn-block" onSubmit={handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    );
};