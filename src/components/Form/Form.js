import React, { Component } from "react";

import Ornament from "../../assets/images/ornament.png";

class Form extends Component {
    render() {
        return (
            <>
                <div className="form-img">
                    <div className="bg-form">
                        <h3 className="form-title">Skontaktuj się z nami</h3>
                        <img src={Ornament} className="form-ornament" alt="" />
                       
                        
                       
                            <div className="row">
                        <div className="contact-form">
                            <h5 className="contact-form-title">
                                Formularz kontaktowy
                            </h5>
                        
                            <input
                                className="contact-form-name"
                                type="text"
                                name="name"
                                placeholder="Imię"
                            />
                            <input
                                className="contact-form-email"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                      
                            <textarea
                                className="contact-form-message"
                                name="message"
                                id="message"
                                placeholder="Wiadomość"
                                rows="1"
                            />
              </div>
                        </div>
              
                        <button className="contact-form-btn">Wyślij</button>
                        </div>
                </div>
              
            </>
        );
    }
}

export default Form;
