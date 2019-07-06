import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Form1/HeaderForm1";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

class MainForm2 extends Component {
    render() {
        return (
            <>
            <Header/>
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
                    <Link to="/goForm2">
                        <button>Wstecz</button>
                    </Link>
                    <Link to="/goForm2">
                        <button>Dalej</button>
                    </Link>
                </form>
                <Form />
                <Footer />
            </>
        );
    }
}

export default MainForm2;
