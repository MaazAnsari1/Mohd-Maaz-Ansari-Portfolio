import React from "react";
import './navbar.scss';

import LandingPage from "../../../pages/landing-page/landingPage";
import AboutPage from "../../../pages/about-page/about";
import ProjectPage from "../../../pages/project-page/project";
import ContactPage from "../../../pages/contact-page/contact";

import Logo from "../../../asserts/logo/logo1.png";
import Hamburger from "../hamburger/hamburger";
import RotatingText from "../../rotating-text/rotating-text";


function Navbar () {
    return (
        <>
            <section>
                <div className="navbar">
                    <div className="nav-content">
                        <div className="logo-wrap">
                            <a href={LandingPage}>
                                <img src={Logo} alt="Home Page" />
                            </a>
                        </div>

                        <div className="nav-menu-wrap">
                            <ul>
                                <li><a href={AboutPage}>About Me</a></li>
                                <li><a href={ProjectPage}>Projects</a></li>
                                <li><a href={ContactPage}>Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="rotating-txt">
                        {/* <RotatingText /> */}
                    </div>

                    <div className="hamburger">
                        <Hamburger />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;
