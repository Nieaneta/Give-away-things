import React, { Component } from "react";

import Button from "../Button";
import Icon1 from "../../assets/images/select.jpg";
import Icon2 from "../../assets/images/pack.png";
import Icon3 from "../../assets/images/whoHelps.png";
import Icon4 from "../../assets/images/orderCourier.png";

import "../../assets/styles/FourSteps.css";
class FourSteps extends Component {
    render() {
        return (
            <>
                <section className="four-steps">
                    <h3 className="steps-title">Wystarczą 4 proste kroki</h3>
                    <div className="ornament" />
                    <div className="steps-bg">
                        <div className="row">
                            <Select />
                            <Pack />
                            <WhoHelps />
                            <OrderCourier />
                        </div>
                    </div>
                    <Button />
                </section>
            </>
        );
    }
}

class Select extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <img
                            src={Icon1}
                            className="four-steps-icon"
                            alt="hands"
                        />
                        <h4 className="select-title">Wybierz rzeczy</h4>
                        <p className="select-txt">
                            ubrania, zabawki, sprzęt i inne
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

class Pack extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <img
                            src={Icon2}
                            className="four-steps-icon"
                            alt="arrow"
                        />
                        <h4 className="select-title">Spakuj je</h4>
                        <p className="select-txt">
                            skorzystaj z worków na śmieci
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

class WhoHelps extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <img
                            src={Icon3}
                            className="four-steps-icon"
                            alt="glasses"
                        />
                        <h4 className="select-title glasses">
                            Zdecyduj komu chcesz pomóc
                        </h4>
                        <p className="select-txt">wybierz zaufane miejsce</p>
                    </div>
                </div>
            </>
        );
    }
}

class OrderCourier extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <img
                            src={Icon4}
                            className="four-steps-icon"
                            alt="people"
                        />
                        <h4 className="select-title">Zamów kuriera</h4>
                        <p className="select-txt">
                            Kurier przyjedzie w dogodnym terminie
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default FourSteps;
