import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm";

class Form1 extends Component {
    state = {
        secondHand: "",
        clothesOut: "",
        toys: "",
        books: "",
        another: ""
    };
    onInputChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    };

    

    render() {
        console.log(this.state);
        return (
            <>
                <h3>Ważne!</h3>
                <p>
                    Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                    będziemy wiedzieć komu najlepiej je przekazać.
                </p>

                <form onSubmit={this.onFormSubmit}>
                    <span>Krok 1/4</span>
                    <h4>Zaznacz co chcesz oddać:</h4>
                    <input
                        type="checkbox"
                        onChange={this.onInputChange("secondHand")}
                    />
                    <label>ubrania, które nadają się do ponownego użycia</label>

                    <input
                        type="checkbox"
                        onChange={this.onInputChange("clothesOut")}
                    />
                    <label>ubrania do wyrzucenia</label>

                    <input
                        type="checkbox"
                        onChange={this.onInputChange("toys")}
                    />
                    <label>zabawki</label>

                    <input
                        type="checkbox"
                        onChange={this.onInputChange("books")}
                    />
                    <label>książki</label>

                    <input
                        type="checkbox"
                        onChange={this.onInputChange("another")}
                    />
                    <label>inne</label>
                    <NavLink to="/goForm2">
                        <button>Dalej</button>
                    </NavLink>
                </form>
                <ContactForm />
            </>
        );
    }
}

export default Form1