import React, { Component } from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

import Ornament from "../../assets/images/ornament.png";

import "../../assets/styles/WhoHelp.css";

const WhoHelp = () => {
    return (
        <>
            <h2 className="who-help-title">Komu pomagamy?</h2>
            <img src={Ornament} className="ornament-who-help" alt="" />
            <Foundation />
            <DescFoundation />
            <CareAboutHealth />
            <ForChild />
            <WithoutHome />
            <Pagination />
        </>
    );
};

const Foundation = () => {
    return (
        <Router>
        <ul className="foundation-list">
            <li className="foundation-list-el"><NavLink to="/foundation">Fundacjom</NavLink></li>
            <li className="foundation-list-el"><NavLink to="/organizaton"> Organizacjom pozarządowym</NavLink></li>
            <li className="foundation-list-el"><NavLink to="/collection">Lokalnym zbiórkom</NavLink></li>
        </ul>
        </Router>
    );
};

const DescFoundation = () => {
    return (
        <p className="foundation-txt">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
        </p>
    );
};

const CareAboutHealth = () => {
    return (
        <>
         <div className="foundation-width">
            <div className="row end">
                <div className="col">
                    <h4 className="foundation-name">
                        Fundacja "Dbam o zdrowie"
                    </h4>
                    <p className="foundation-mission">
                        Cel i misja: Pomoc osobom znajdującym się w trudnej
                        sytuacji życiowej.
                    </p>
                </div>
               
                <div className="col">
                    <p className="foundation-things">
                        ubrania, jedzenie, sprzęt AGD, meble, zabawki
                    </p>
                </div>
                </div>
                </div>
        </>
    );
};

const ForChild = () => {
    return (
        <>
        <div className="foundation-width">
            <div className="row end">
                <div className="col">
                    <h4 className="foundation-name">Fundacja "Dla dzieci"</h4>
                    <p className="foundation-mission">
                        Cel i misja: Pomoc dzieciom z ubogich rodzin.
                    </p>
                    </div>
                    <div className="col">
                    <p className="foundation-things">ubrania, meble, zabawki</p>
                </div>
            </div>
            </div>
        </>
    );
};

const WithoutHome = () => {
    return (
        <>
           <div className="foundation-width">
           <div className="row end">
                <div className="col">
            <h4 className="foundation-name">Fundacja "Bez domu"</h4>
            <p className="foundation-mission">
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania.
            </p>
            </div>
            <div className="col">
            <p className="foundation-things">ubrania, jedzenie, ciepłe koce</p>
            </div>
            </div>
            </div>
        </>
    );
};

class Pagination extends Component {
    render() {
        return (
            <Router>
            <div className="pagination">
                <NavLink to="/foundation">1</NavLink>
                <NavLink to="/organization">2</NavLink>
                <NavLink to="/collection">3</NavLink>
            </div>
            </Router>
        );
    }
}

export default WhoHelp;
