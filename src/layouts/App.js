import React, { Component } from "react";
import "../assets/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";

import Nav from "../components/Nav/Nav";
import Logged from "../components/Logged/Logged";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import FourSteps from "../components/FourSteps/FourSteps";
import About from "../components/About/About";
import WhoHelp from "../components/WhoHelp/WhoHelp";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <div className="app">
                        <nav className="navigation">
                            <Nav />

                            <Switch>
                                <Route path="/" exact component={Header} />
                                <Route path="/info" component={Info} />
                                <Route path="/about" component={About} />
                                <Route
                                    path="/foundation"
                                    component={FourSteps}
                                />
                                <Route path="/contact" component={Form} />
                                <Route path="/login" component={Logged} />
                            </Switch>
                        </nav>
                        {/* <header className="page-header">{<Header />}</header> */}
                        <section className="page-information">
                            {<Info />}
                        </section>

                        <section className="page-four-steps">
                            {<FourSteps />}
                        </section>
                        <section className="page-about-us">{<About />}</section>
                        <section className="page-who-help">
                            {<WhoHelp />}
                        </section>
                        <section className="page-form">{<Form />}</section>
                        <footer className="page-footer">{<Footer />}</footer>
                    </div>
                </>
            </Router>
        );
    }
}

export default App;
