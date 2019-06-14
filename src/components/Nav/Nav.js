import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/Nav.css";
// import { Link, animateScroll as scroll } from "react-scroll";

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "O co chodzi?", path: "/info" },
    { name: "O nas", path: "/about" },
    { name: "Fundacje i organizacje", path: "/foundation" },
    { name: "Kontakt", path: "/contact" }
];

const Nav = () => {
    const menu = list.map(item => (
        <li className="nav-list-el" key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                {item.name}
            </NavLink>
        </li>
    ));
    return (
        <>
            <div className="login">
                <p className="login-txt">Zaloguj</p>
                <p className="login-account">Załóż konto</p>
            </div>
            <nav className="nav" id="navbar">
                <ul className="nav-list">{menu}</ul>
            </nav>
        </>
    );
};

export default Nav;
