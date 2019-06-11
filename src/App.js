import React, { Component } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import FourSteps from "./components/FourSteps/FourSteps";
import About from "./components/About/About";

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Info />
                <FourSteps />
                <About />
            </div>
        );
    }
}

export default App;
