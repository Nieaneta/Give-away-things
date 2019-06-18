import React, { Component } from 'react';

class Logged extends Component{
    state={
        email: "",
        password: "",
        repeatPassword: "",
        isLogged: false,
        user: null
    }
    
    onInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const {login, password} = this.state;
        const {logged} = this.props
    
    fetch(users)
            .then(data => data.json())
            .then(users => {
                
                users.forEach(user => {
                    const isLoginValid = user.login === login;
                    const isPasswordValid = user.password === password;

                    if(isLoginValid && isPasswordValid){
                        logged(user);
                        this.setState({isLogged: true, user})
                    } else{
                        this.setState({errorMessage: "Zly login lub haslo"})
                    }
                })
            })
            .catch(err => alert(err))
    }


    render(){
        const {email, password, repeatPassword, isLogged,user} = this.state;
        if(!isLogged){
        return(
            <>
            <Nav/>
            <h2>Zaloguj się</h2>
            <Ornament/>
            <form className="formSignIn" onSubmit={this.onFormSubmit}>

          
            <input 
            type="email" 
            id="email" 
            className="emailLog" 
            value={email} 
            name="email" 
            onChange={this.onInputChange}>
                Email
                </input>

            <input 
            type="password" 
            id="password" 
            className="passwordLog" 
            name="password" 
            onChange={this.onInputChange}>
                Hasło</input>

            <p className="remindPass">Przypomnij hasło</p>
            <button className="signIn" type="submit">Zaloguj się</button>
            </form>
            <p className="createAccount"><Link to="/newUser">Założ konto</Link></p>
            </>
        )
      

        }  else if(isLogged){
            return(
                <>
                <Nav/>
                <h4 className="welcome">Witaj, {user.login}</h4>
                </>
            )
    }
}}

export default Logged