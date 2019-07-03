import React, { Component } from "react";
import "../assets/styles/App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Logged from "../components/Logged";
import CreateAccount from "../components/CreateAccount";
import LandingPage from "./LandingPage";
import FormGive from "../components/FormGive";

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <div className="app">
                        <nav className="navigation">
                            <Nav />

                            <Switch>
                                <Route path="/" exact component={LandingPage} />
                                <Route path="/login" component={Logged} />
                                <Route path="/create-account" component={CreateAccount}/>
                                <Route path="/form-give" component={FormGive} />
                            </Switch>
                        </nav>
                    </div>
                </>
            </Router>
        );
    }
}

export default App;
