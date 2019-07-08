import React, { Component } from "react";
import "../assets/styles/App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Logged from "../components/Logged";
import CreateAccount from "../components/CreateAccount";
import LandingPage from "./LandingPage";
import FormGive from "../components/FormGive";
import Form2 from "../components/Form2";
import Form3a from "../components/Form3a";
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
                            <Route
                                path="/create-account"
                                component={CreateAccount}
                            />
                            <Route path="/form-give" component={FormGive} />
                            <Route path="/form2" component={Form2} />
                            <Route path="/form3a" component={Form3a} />

                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}

export default App;
