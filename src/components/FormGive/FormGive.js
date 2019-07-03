import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Ornament from "../../assets/images/ornament.png";
import ContactForm from "../ContactForm";
import "../../assets/styles/FormGive.css";
import Form1 from "../Form1/Form1";

class FormGive extends Component {

    onFormSubmit =(inputs)=>{
        this.setState( prevState => ({
            ...inputs, ...prevState
        }))
    }

    render() {
        console.log(this.state);
        return (
            <div className="header-form-give">
                <h3>Oddaj rzeczy, których już nie chcesz</h3>
                <h2>Potrzebującym</h2>
                {/* <Ornament /> */}
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

            {(() => {
                switch(this.state.form) {
                  case 1:
                    return <Form1 onSubmit={this.onFormSubmit} />;
                //   case 2:
                //     return <Form2  />;
                //   case 3:
                //     return <Form3 />;
                //     case 4:
                //         return <Form4/>
                  default:
                    return null;
                }
              })()}
        
                {/* <MainForm /> */}
            </div>
        );
    }
}


export default FormGive;
