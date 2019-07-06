import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Form1/HeaderForm1";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

class MainForm3b extends Component {
    render() {
        return (
            <>
            <Header/>
                <h3>Ważne!</h3>
                <p>
                    Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka.
                </p>

                <form>
                    <span>Krok 3/4</span>
                    <h4>
                        Wybierz organizację, której chcesz pomóc:
                    </h4>
                   
                   

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

export default MainForm3b;
