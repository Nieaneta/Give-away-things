import React from "react";

const Nav = () => {
    return (
        <>
        <div className="login">
            <p className="login-txt">Zaloguj</p>
            <p className="login-account">Załóż konto</p>
        </div>
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-list-el">Start</li>
                <li className="nav-list-el">O co chodzi ?</li>
                <li className="nav-list-el">O nas</li>
                <li className="nav-list-el">Fundacje i organizacje</li>
                <li className="nav-list-el">Kontakt</li>
            </ul>
        </div>
        </>
    );
};

export default Nav;
