import React, { Component } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import FourSteps from "./components/FourSteps/FourSteps";
import About from "./components/About/About";
import WhoHelp from "./components/WhoHelp/WhoHelp";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
class App extends Component {
    render() {
        return (
            <>
                <Nav />
                <Header />
                <Info />
                <FourSteps />
                <About />
                <WhoHelp/>
                <Form/>
                <Footer/>
            </>
        );
    }
}

export default App;
