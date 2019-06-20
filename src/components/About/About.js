import React from "react";

import Sign from "../../assets/images/signature.png";
import Ornament from "../../assets/images/ornament.png";

import "../../assets/styles/About.css";

const About = () => {
    return (
        <>
            <section className="about-us" id="about">
                <div className="row">
                    <div className="col">
                        <h2 className="about-us-title">O nas</h2>
                        <img
                            className="about-us-ornament"
                            src={Ornament}
                            alt="ornament"
                        />
                        <div className="about-us-text-col">
                        <p className="about-us-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur fugiat aliquid odit enim non
                            labore ipsa, quod minima quos eius. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                        </p>
                        </div>
                        <img
                            className="about-us-signature"
                            src={Sign} alt=""
                        />
                    </div>

                    <div className="about-us-img" />
                </div>
            </section>
        </>
    );
};

export default About;
