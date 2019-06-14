import React from "react";

import "../../assets/styles/Header.css";
const Header = () => {
    return (
        <>
            <header className="header">
                <p className="header-txt">Zacznij pomagać!</p>
                <p className="header-give">
                    Oddaj niechciane rzeczy w zaufane ręce
                </p>
                <div className="header-img" />
                <button className="give">Oddaj rzeczy</button>
                <button className="collection">Zorganizuj zbiórkę</button>
            </header>
        </>
    );
};

export default Header;
