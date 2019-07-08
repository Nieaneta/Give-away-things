import React, { Component } from "react";
import Footer from "../Footer";
import Ornament from "../../assets/images/ornament.png";
import "../../assets/styles/ContactForm.css";

class Form extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        isButtonClick: true,
        isNameValid: true,
        isEmailValid: true,
        isMessageValid: true,
        isFormValid: false
    };

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onButtonClick = e => {
        this.setState(state => ({
            isButtonClick: !state.isButtonClick
        }));
    };

    onFormSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const isNameValid = name.length >= 2 && typeof name === "string";
        const isEmailValid = email.length >= 3 && email.includes("@");
        const isMessageValid =
            message.length > 0 && typeof message === "string";
        this.setState({
            isNameValid,
            isEmailValid,
            isMessageValid
        });
        if (isNameValid && isEmailValid && isMessageValid) {
            this.setState({
                isFormValid: true,
                name: "",
                email: "",
                message: ""
            });
        } else {
            this.setState({
                isFormValid: false
            });
        }
    };

    render() {
        const {
            name,
            email,
            message,
            isNameValid,
            isEmailValid,
            isMessageValid,
            isFormValid
        } = this.state;
        return (
            <>
                <form
                    onSubmit={this.onFormSubmit}
                    className="form-img"
                    id="contact"
                >
                    <div className="bg-form">
                        <h3 className="form-title">Skontaktuj się z nami</h3>
                        <img src={Ornament} className="form-ornament" alt="" />

                        <div className="row">
                            <div className="contact-form">
                                <h5 className="contact-form-title">
                                    Formularz kontaktowy
                                </h5>

                                <input
                                    value={name}
                                    onChange={this.onInputChange}
                                    className="contact-form-name"
                                    type="text"
                                    name="name"
                                    placeholder="Imię"
                                />
                                <input
                                    value={email}
                                    onChange={this.onInputChange}
                                    className="contact-form-email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />

                                <textarea
                                    value={message}
                                    onChange={this.onInputChange}
                                    className="contact-form-message"
                                    name="message"
                                    id="message"
                                    placeholder="Wiadomość"
                                    rows="1"
                                />
                            </div>
                        </div>

                        <button
                            onClick={this.onButtonClick}
                            type="submit"
                            className="contact-form-btn"
                        >
                            Wyślij
                        </button>
                        <div>
                            <div>
                                {!isNameValid &&
                                    "Pole imię musi zawierać co najmniej 2 znaki"}
                            </div>
                            <div>
                                {!isEmailValid &&
                                    "Pole email musi zawierać znak @ i co najmniej 3 znaki"}
                            </div>
                            <div>
                                {!isMessageValid &&
                                    "Pole wiadomość musi zostać uzupełnione"}
                            </div>
                        </div>
                        {isFormValid && "Dziękujemy za wiadomość! :)"}
                    </div>
                  
                    <Footer />
                </form>
            </>
        );
    }
}

export default Form;
