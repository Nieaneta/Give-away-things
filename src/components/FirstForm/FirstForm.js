import React, { Component } from "react";
import { Link } from "react-router-dom";

import Ornament from "../../assets/images/ornament.png";
import Form from "../Form/Form.js";
import "../../assets/styles/FirstForm.css";


class FirstForm extends Component {
    render() {
        return (
            <div className="header-formFirst">
                <h3>Oddaj rzeczy, których już nie chcesz</h3>
                <h2>Potrzebującym</h2>
                <Ornament />
                <h4>Wystarczą 4 proste kroki:</h4>
                <div>
                    <span>1</span>
                    <p>Wybierz rzeczy</p>
                </div>
                <div>
                    <span>2</span>
                    <p>Spakuj je w worki</p>
                </div>
                <div>
                    <span>3</span>
                    <p>Wybierz fundację</p>
                </div>
                <div>
                    <span>4</span>
                    <p>Zamów kuriera</p>
                </div>
                <MainForm />
            </div>
        );
    }
}

class MainForm extends Component {
    render() {
        return (
            <>
                <h3>Ważne!</h3>
                <p>
                    Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                    będziemy wiedzieć komu najlepiej je przekazać.
                </p>

                <form>
                    <span>Krok 1/4</span>
                    <h4>Zaznacz co chcesz oddać:</h4>
                    <input type="checkbox" />
                    <label>ubrania, które nadają się do ponownego użycia</label>

                    <input type="checkbox" />
                    <label>ubrania do wyrzucenia</label>

                    <input type="checkbox" />
                    <label>zabawki</label>

                    <input type="checkbox" />
                    <label>książki</label>

                    <input type="checkbox" />
                    <label>inne</label>
                    <Link to="/goForm2">
                        <button>Dalej</button>
                    </Link>
                </form>
                <Form />
            </>
        );
    }
}

export default FirstForm;
