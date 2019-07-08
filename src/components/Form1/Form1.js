import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ContactForm from "../ContactForm";
// import Form2 from "../Form2";

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
        this.props.onSubmit(this.state);
    };

    render() {
        console.log(this.state);
        return (
            <>
            <div className="img-bear">
                <div className="important">
                    <h3>Ważne!</h3>
                    <p>
                        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                        będziemy wiedzieć komu najlepiej je przekazać.
                    </p>
                </div>
                <form className="form-checked" onSubmit={this.onFormSubmit}>
                    <span>Krok 1/4</span>
                    <h4>Zaznacz co chcesz oddać:</h4>

                    <input className="checkbox"
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
                    <NavLink to="/form2">
                        <button className="form-btn-go">Dalej</button>
                    </NavLink>
                </form>
                </div>
                <ContactForm />
            </>
        );
    }
}

export default Form1;
