import React, { Component } from "react";
import "../assets/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Logged from "../components/Logged/Logged";
import LandingPage from "./LandingPage";
import FormOddaj from "./FormOddaj";
class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <div className="app">
                            <Nav />
                            <Switch>
                                <Route path="/" exact component={LandingPage} />
                                <Route path="/login" component={Logged} />
                                <Route path="/oddaj" component={FormOddaj} />
                            </Switch>

                    </div>
                </>
            </Router>
        );
    }
}

export default App;
