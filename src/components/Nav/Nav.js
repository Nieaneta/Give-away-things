import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Nav.css";
import { Link } from "react-scroll";
import { withRouter } from "react-router-dom";

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "O co chodzi?", to: "info" },
    { name: "O nas", to: "about" },
    { name: "Fundacje i organizacje", to: "foundation" },
    { name: "Kontakt", to: "contact" }
];

const options = {
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: -10,
    duration: 500
};

const logoutUser = Promise.resolve(); // TODO: obsługa wylogowania

class Nav extends Component {
    loggOut = () => {
        logoutUser().then(() => this.props.history.push("/"));
    };

    render() {
        const { loggUser, loggOut } = this.props;
        const menu = list.map(item => {
            const Component = item.path ? NavLink : Link;
            return (
                <li className="nav-list-el" key={item.name}>
                    <Component
                        {...options}
                        to={item.path || item.to}
                        exact={item.exact ? item.exact : false}
                    >
                        {item.name}
                    </Component>
                </li>
            );
        });
        return (
            <>
                <div className="login">
                    <p className="login-txt">
                        <NavLink to="/login">Zaloguj</NavLink>
                    </p>
                    <div className="navLog">
                        {loggUser && <button onClick={loggOut} />}
                    </div>
                    <p className="login-account">
                        <NavLink to="/create-account">Załóż konto</NavLink>
                    </p>
                </div>
                <nav className="nav" id="navbar">
                    <ul className="nav-list">{menu}</ul>
                </nav>
            </>
        );
    }
}

export default withRouter(Nav);
