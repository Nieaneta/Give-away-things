import React from "react";

const About = () => {
    return (
        <>
            <div className="about-us">
                <div className="row">
                    <div className="col">
                        <h2 className="about-us-title">O nas</h2>
                        <img
                            className="about-us-ornament"
                            src="./assets/images/ornament.png"
                            alt=""
                        />
                        <p className="about-us-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur fugiat aliquid odit enim non
                            labore ipsa, quod minima quos eius. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                        </p>
                        <img
                            className="about-us-signature"
                            src="./assets/images/Signature.jpg" alt=""
                        />
                    </div>

                    <div className="about-us-img" />
                </div>
            </div>
        </>
    );
};

export default About;
