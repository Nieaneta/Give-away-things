import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Header from "../Form1/HeaderForm1";
import Ornament from "../../assets/images/ornament.png";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

class FormThx extends Component {
    render() {
        return (
            <>
            <Header/>
              <p>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</p>
              <img src={Ornament} alt=""/>
                <Form />
                <Footer />
            </>
        );
    }
}

export default FormThx;
