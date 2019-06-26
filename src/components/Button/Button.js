import React from 'react';
import {NavLink} from 'react-router-dom';

const Button = () => {
    return(
        <NavLink to="/create-account"><button className="create-account">Załóż konto</button></NavLink>
    )
}

export default Button;