import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";

class Form3a extends Component {
    render() {
        return (
            <>
                <h3>Ważne!</h3>
                <p>
                    Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                    organizacji w wyszukiwarce. Możesz też filtrować organizacje
                    po ich lokalizacji bądź celu ich pomocy.
                </p>

                <form>
                    <span>Krok 3/4</span>
                    <h4>Lokalizacja:</h4>
                    <select required>
                        <option value="" disabled selected hidden>
                            wybierz
                        </option>
                        <option value="0">Warszawa</option>
                        <option value="0">Kraków</option>
                        <option value="0">Wrocław</option>
                        <option value="0">Gdańsk</option>
                    </select>
                    <h5>Komu chcesz pomóc?</h5>
                    <button>dzieciom</button>
                    <button>samotnym matkom</button>
                    <button>bezdomnym</button>
                    <button>niepełnosprawnym</button>
                    <button>osobom starszym</button>

                    <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
                    <input type="text" />

                    <Link to="/form2">
                        <button>Wstecz</button>
                    </Link>
                    <Link to="/form2">
                        <button>Szukaj</button>
                    </Link>
                </form>
                <ContactForm />
            </>
        );
    }
}

export default Form3a;
