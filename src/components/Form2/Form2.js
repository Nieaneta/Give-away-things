import React, { Component } from "react";
import { Link } from "react-router-dom";

// import FormGive from "../FormGive";
import ContactForm from "../ContactForm";

class Form2 extends Component {
    render() {
        return (
            <>
                <h3>Ważne!</h3>
                <p>
                    Wszystkie rzeczy do oddania zapakuj w 60l
                    ServiceWorkerRegistration.Dokładną instrukcję jak poprawnie
                    spakować rzeczy znajdziesz <a href="/">TUTAJ.</a>
                </p>

                <form>
                    <span>Krok 2/4</span>
                    <h4>
                        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                    </h4>
                    <label>Liczba worków:</label>
                    <select required>
                        <option value="" disabled selected hidden>
                            wybierz
                        </option>
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                    </select>
                    <Link to="/form-give">
                        <button>Wstecz</button>
                    </Link>
                    <Link to="/form3a">
                        <button>Dalej</button>
                    </Link>
                </form>
                <ContactForm/>
            </>
        );
    }
}

export default Form2;
