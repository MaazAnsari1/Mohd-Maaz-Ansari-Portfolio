import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss';

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
                            <Link to="/">
                                <img src={Logo} alt="Home Page" />
                            </Link>
                        </div>

                        <div className="nav-menu-wrap">
                            <ul>
                                <li><Link to="/about">About Me</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
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
