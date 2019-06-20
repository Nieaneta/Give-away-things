import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import Ornament from "../../components/Ornament";
import Logg from "../../assets/styles/Logged.css";

class Logged extends Component {
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
        const { login, password } = this.state;
        const { logged } = this.props;
    };
    // fetch(users)
    //         .then(data => data.json())
    //         .then(users => {

    //             users.forEach(user => {
    //                 const isLoginValid = user.login === login;
    //                 const isPasswordValid = user.password === password;

    //                 if(isLoginValid && isPasswordValid){
    //                     logged(user);
    //                     this.setState({isLogged: true, user})
    //                 } else{
    //                     this.setState({errorMessage: "Zly login lub haslo"})
    //                 }
    //             })
    //         })
    //         .catch(err => alert(err))
    // }

    render() {
        const { email, password, repeatPassword, isLogged, user } = this.state;
        // if(!isLogged){
        return (
            <>
                <div className="formLog">
                    <h2>Zaloguj się</h2>
                    <Ornament />
                    <form className="formSignIn" onSubmit={this.onFormSubmit}>
                        <input
                            type="email"
                            id="email"
                            className="emailLog"
                            value={email}
                            name="email"
                            onChange={this.onInputChange}
                        />
                        <label>Email</label>

                        <input
                            type="password"
                            id="password"
                            className="passwordLog"
                            name="password"
                            onChange={this.onInputChange}
                        />
                        <label>Hasło</label>

                        <p className="remindPass">Przypomnij hasło</p>

                        <button className="signIn" type="submit">
                            Zaloguj się
                        </button>
                   
                    <button className="createAccount">
                        <Link to="/newUser">Założ konto</Link>
                    </button>
                    </form>
                </div>
            </>
        );

        //     }  else if(isLogged){
        //         return(
        //             <>
        //             <Nav/>
        //             <h4 className="welcome">Witaj, {user.login}</h4>
        //             </>
        //         )
        // }
    }
}

export default Logged;
