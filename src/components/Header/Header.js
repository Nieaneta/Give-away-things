import React, {Component} from "react";
import {Route} from 'react-router-dom';
import "../../assets/styles/Header.css";
import Form1Page from '../Form1/HeaderForm1';

const isClicked = false;
class Header extends Component{
    state={
        isClicked: false
    }

    render(){
    return (
        <>
            <header className="header">
                <p className="header-txt">Zacznij pomagać!</p>
                <p className="header-give">
                    Oddaj niechciane rzeczy w zaufane ręce
                </p>
                <div className="header-img" />
                <Route path="/">
                <button onClick={this.handleButtonClick ? isClicked : <Form1Page/>} className="give">Oddaj rzeczy</button>
                <button onClick={this.handleButtonClick} className="collection">Zorganizuj zbiórkę</button>
                </Route>
            </header>
        </>
    );
}
}

export default Header;
