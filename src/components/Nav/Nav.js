import React, { Component } from "react";

import "../../assets/styles/Nav.css";
import { Link } from "react-scroll";

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "O co chodzi?", path: "info" },
    { name: "O nas", path: "/about" },
    { name: "Fundacje i organizacje", path: "/foundation" },
    { name: "Kontakt", path: "/contact" }
];

const options = {
    spy: true,
    smooth: true,
    offset: -10,
    duration: 500
};

class Nav extends Component {
    render() {
        const { loggUser, loggOut } = this.props;
        const menu = list.map(item => (
            <li className="nav-list-el" key={item.name}>
                <Link
                    activeClass="active"
                    {...options}
                    to={item.path}
                    exact={item.exact ? item.exact : false}
                >
                    {item.name}
                </Link>
            </li>
        ));
        return (
            <>
                <div className="login">
                    <p className="login-txt">
                        <Link to="/">Zaloguj</Link>
                    </p>
                    <div className="navLog">
                        {loggUser && <button onClick={loggOut} />}
                    </div>
                    <p className="login-account">
                        <Link to="/">Załóż konto</Link>
                    </p>
                </div>
                <nav className="nav" id="navbar">
                    <ul className="nav-list">{menu}</ul>
                </nav>
            </>
        );
    }
}

export default Nav;
