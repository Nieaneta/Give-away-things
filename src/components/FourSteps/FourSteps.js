import React, { Component } from "react";

import Button from "../Button/Button";

class FourSteps extends Component {
    render() {
        return (
            <>
                <div className="four-steps">
                    <div className="steps-title">Wystarczą 4 proste kroki</div>
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
                </div>
            </>
        );
    }
}

class Select extends Component {
    render() {
        return (
            <>
                <div className="col">
                    <img
                        src="../../assets/images/square.jpg"
                        className="select-img"
                        alt=""
                    />
                    {/* <div className="select-img"></div> */}
                    <h4 className="select-title">Wybierz rzeczy</h4>
                    <p className="select-txt">
                        ubrania, zabawki, sprzęt i inne
                    </p>
                </div>
            </>
        );
    }
}

class Pack extends Component {
    render() {
        return (
            <>
                <div className="col">
                    {/* <img
                        src="./assets/images/pack.png"
                        className="select-img"
                        alt=""
                    /> */}
                    <h4 className="select-title">Spakuj je</h4>
                    <p className="select-txt">skorzystaj z worków na śmieci</p>
                </div>
            </>
        );
    }
}

class WhoHelps extends Component {
    render() {
        return (
            <>
                <div className="col">
                    <img
                        src="./assets/images/whoHelps.png"
                        className="select-img"
                        alt=""
                    />
                    <h4 className="select-title">Zdecyduj komu chcesz pomóc</h4>
                    <p className="select-txt">wybierz zaufane miejsce</p>
                </div>
            </>
        );
    }
}

class OrderCourier extends Component {
    render() {
        return (
            <>
                <div className="col">
                    <img
                        src="./assets/images/orderCourier.png"
                        className="select-img"
                        alt=""
                    />
                    <h4 className="select-title">Zamów kuriera</h4>
                    <p className="select-txt">
                        Kurier przyjedzie w dogodnym terminie
                    </p>
                </div>
            </>
        );
    }
}

export default FourSteps;
