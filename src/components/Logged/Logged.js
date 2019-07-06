import React, { Component } from "react";
import Nav from "../Nav";
import { Link, NavLink } from "react-router-dom";
import Ornament from "../../assets/images/ornament.png";
import Logg from "../../assets/styles/Logged.css";
import API from "../../components/API/Api";
import FormGive from "../FormGive";

const isClicked = false;
class Logged extends Component {
    state = {
        email: "",
        password: "",
        repeatPassword: "",
        isLogged: false,
        users: [],
        isClicked: false
    };

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { logged } = this.props;
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    };

    componentDidMount() {
        // let API = "http://localhost:3000/users";
        fetch(API)
            .then(resp => resp.json())
            .then(users => {
                users.map(
                    users((user, id) => {
                        return (
                            <div key={id}>
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                                <p>{user.password}</p>
                            </div>
                        );
                        // const isLoginValid = user.email === email;
                        // const isPasswordValid = user.password === password;

                        // if (isLoginValid && isPasswordValid) {
                        //     logged(user);
                        //     this.setState({ isLogged: true, user });
                        // } else {
                        //     this.setState({
                        //         errorMessage: "Zly login lub haslo"
                        //     });
                        // }
                    })
                );
            });
    }
    render() {
        const { email, password, repeatPassword, isLogged, users } = this.state;
        if (!isLogged) {
            return (
                <>
                    <div className="formLog">
                        {this.state.users}
                        <h2 className="formLogTitle">Zaloguj się</h2>
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

                            <p className="remindPass">Przypomnij hasło</p>
                            <div className="buttonLogg">
                                <button
                                    className="createAccountLog"
                                    type="submit"
                                >
                                    <NavLink to="/create-account">
                                        Załóż konto
                                    </NavLink>
                                </button>

                                <button className="signInLog" type="submit">
                                    <NavLink to="/form-give">
                                        Zaloguj się
                                    </NavLink>
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
            //             <FormGive/>
            //         </>
            //     );
            // }
        }
    }
}
export default Logged;
