import React, { Component } from "react";
import "../assets/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../components/Nav/Nav";
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
                            {<Nav />}

                            <Switch>
                                <Route path="/" exact Component={Header} />
                                <Route path="/info" Component={Info} />
                                <Route path="/about" Component={About} />
                                <Route
                                    path="/foundation"
                                    Component={FourSteps}
                                />
                                <Route path="/contact" Component={Form} />
                            </Switch>
                        </nav>
                        <header className="page-header">{<Header />}</header>
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
