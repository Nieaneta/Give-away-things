import React from 'react';

import FbIcon from "../../assets/images/fb.png";
import InstaIcon from "../../assets/images/insta.png";

import "../../assets/styles/Footer.css";

const Footer = () =>{
    return (
        <>
        <footer className="footer">
        <p className="footer-copy">Copyright 2015 &copy; by Anna Dadej</p>
        
        <a href="/"><img src={FbIcon} className="footer-fb" alt="" /></a>
        <a href="/"><img src={InstaIcon} className="footer-insta" alt="" /></a>
        </footer>
     
        </>
    )
}

export default Footer;