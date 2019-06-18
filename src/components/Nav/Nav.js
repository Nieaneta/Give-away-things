import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../../assets/styles/Nav.css";

// import NavScroll from "./NavScroll";

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "O co chodzi?", path: "/info" },
    { name: "O nas", path: "/about" },
    { name: "Fundacje i organizacje", path: "/foundation" },
    { name: "Kontakt", path: "/contact" }
];

const Nav = (props) => {
    const {loggUser} = props;
    const {loggOut} = props;
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
                <p className="login-txt"><Link to="/">Zaloguj</Link></p>
                    <div className="navLog">
                    {loggUser && <button onClick={loggOut}></button>}
                    </div>
                <p className="login-account"><Link to="/">Załóż konto</Link></p>
            </div>
            <nav className="nav" id="navbar">
                <ul className="nav-list">{menu}</ul>
            </nav>
        </>
    );
};

export default Nav;
