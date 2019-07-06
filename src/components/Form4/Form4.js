import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Form1/HeaderForm1";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

class MainForm4 extends Component {
    render() {
        return (
            <>
            <Header/>
                <h3>Ważne!</h3>
                <p>
                 Podaj adres oraz termin odbioru rzeczy.
                </p>

                <form>
                    <span>Krok 4/4</span>
                    <h4>
                        Podaj adres oraz termin odbioru rzeczy przez kuriera
                    </h4>
                  <h5>Adres odbioru</h5>

                  <label>Ulica</label>
                  <input type="text"/>

                  <label>Miasto</label>
                  <input type="text"/>

                  <label>Kod pocztowy</label>
                  <input type="text"/>

                  <label>Numer telefonu</label>
                  <input type="tel"/>

                  <h5>Termin odbioru</h5>
                 
                  <label>Data</label>
                  <input type="date"/>

                
                  <label>Godzina</label>
                  <input type="time"/>

                  
                  <label>Uwagi dla kuriera</label>
                  <textarea name="" id="" rows="5"></textarea>

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

export default MainForm4;
