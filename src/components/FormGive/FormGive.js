import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

import Ornament from "../../assets/images/ornament.png";
// import ContactForm from "../ContactForm";
import "../../assets/styles/FormGive.css";
import Form1 from "../Form1";
import NavLog from "../NavLog";
import "../../assets/styles/Form1.css";

class FormGive extends Component {
    onFormSubmit = inputs => {
        this.setState(prevState => ({
            ...inputs,
            ...prevState
        }));
    };

    render() {
        console.log(this.state);
        return (
            <>
                <NavLog />

                <div className="header-form-give">
                    <h3 className="header-form-give-title">Oddaj rzeczy, których już nie chcesz</h3>
                    <h2 className="header-form-give-text">Potrzebującym</h2>
                    <img src={Ornament} className="header-form-give-ornament" alt="" />
                    <h4 className="header-form-give-txt">Wystarczą 4 proste kroki:</h4>

                    <div className="header-checked">
                        <div className="rhombus">
                        <span>1</span>
                        <p>Wybierz rzeczy</p>
                    </div>
                    <div className="rhombus">
                        <span>2</span>
                        <p>Spakuj je w worki</p>
                    </div>
                    <div className="rhombus">
                        <span>3</span>
                        <p>Wybierz fundację</p>
                    </div>
                    <div className="rhombus">
                        <span>4</span>
                        <p>Zamów kuriera</p>
                    </div>
                    </div>
                    {/* {(() => {
                switch(this.state.form) {
                  case 1:
                    return <Form1 onSubmit={this.onFormSubmit} />;
                  case 2:
                    return <Form2  />;
                  case 3:
                    return <Form3 />;
                    case 4:
                        return <Form4/>
                  default:
                    return null;
                }
              })()}
         */}
                  </div>
                <Form1 />
            </>
        );
    }
}

export default FormGive;
