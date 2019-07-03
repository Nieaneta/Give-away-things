import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "../../assets/styles/Header.css";
import "../Nav";


const isClicked = false;
class Header extends Component {
    state = {
        isClicked: false
    };

    handleButtonClick = event => {
        console.log(event);
    };

    render() {
        return (
            <>
                <header className="header">
                    <p className="header-txt">Zacznij pomagać!</p>
                    <p className="header-give">
                        Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                    <div className="header-img" />
                    <NavLink to="/login">
                        <button className="give">Oddaj rzeczy</button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className="collection">
                            Zorganizuj zbiórkę
                        </button>
                    </NavLink>
                </header>
            </>
        );
    }
}

export default Header;
