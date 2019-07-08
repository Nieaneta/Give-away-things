import React, { Component } from "react";
import Nav from "../../components/Nav";
import { NavLink } from "react-router-dom";
import Ornament from "../../assets/images/ornament.png";
import CreateAcc from "../../assets/styles/Account.css";

class Account extends Component {
    state = {
        email: "",
        password: "",
        repeatPassword: "",
        isLogged: false,
        users: null
    };

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        // const { email, password } = this.state;
        // const { logged } = this.props;
    };

    render() {
        const { email, password, repeatPassword, isLogged, user } = this.state;
        if (!isLogged) {
            return (
                <>
                    <div className="formLog">
                        <h2 className="formLogTitle">Załóż konto</h2>
                        <img src={Ornament} alt="" className="imgOrnam" />
                        <form
                            className="formSignIn"
                            onSubmit={this.onFormSubmit}
                        >
                            <input
                                type="email"
                                id="email"
                                className="emailLog"
                                value={email}
                                name="email"
                                placeholder="Email"
                                onChange={this.onInputChange}
                            />

                            <input
                                type="password"
                                id="password"
                                className="passwordLog"
                                name="password"
                                placeholder="Hasło"
                                onChange={this.onInputChange}
                            />

                            <input
                                type="password"
                                id="password"
                                className="passwordLog"
                                name="password"
                                placeholder="Powtórz hasło"
                                onChange={this.onInputChange}
                            />

                            <div className="buttonLogg">
                                <button className="signIn" type="submit">
                                    <NavLink to="/login">Zaloguj się</NavLink>
                                </button>
                                <button className="createAccount" type="submit">
                                    Załóż konto
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            );

            // if (isLogged) {
            //     return (
            //         <>
            //             <Nav />
            //             <h4 className="welcome">Witaj, {user.login}</h4>
            //         </>
            //     );
            // }
        }
    }
}
export default Account;
