import React, { useState } from "react";
import './hamburger.scss';
import LandingPage from "../../../pages/landing-page/landingPage";
import AboutPage from "../../../pages/about-page/about";
import ProjectPage from "../../../pages/project-page/project";
import ContactPage from "../../../pages/contact-page/contact";

import RotatingText from "../../rotating-text/rotating-text";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={isOpen ? "bar rotate1" : "bar"}></div>
                <div className={isOpen ? "bar fade-out" : "bar"}></div>
                <div className={isOpen ? "bar rotate2" : "bar"}></div>
            </button>

            {isOpen && (
                <div className="menu">
                    <ul>
                        {/* <RotatingText /> */}
                        <li><a href={LandingPage}>Home</a></li>
                        <li><a href={AboutPage}>About Me</a></li>
                        <li><a href={ProjectPage}>Project</a></li>
                        <li><a href={ContactPage}>Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Hamburger;