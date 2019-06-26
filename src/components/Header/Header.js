import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import "../../assets/styles/Header.css";
import Form1Page from '../Form1/HeaderForm1';

const isClicked = false;
class Header extends Component{
    state={
        isClicked: false
    }

    handleButtonClick = (event) => {
        console.log(event)
    }

    render(){
    return (
        <>
            <header className="header">
                <p className="header-txt">Zacznij pomagać!</p>
                <p className="header-give">
                    Oddaj niechciane rzeczy w zaufane ręce
                </p>
                <NavLink to='/oddaj'>Oddaj </NavLink>
                <div className="header-img" />
            </header>
        </>
    );
}
}

export default Header;
