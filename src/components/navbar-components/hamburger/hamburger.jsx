import React, { useState } from "react";
import { Link } from "react-router-dom";
import './hamburger.scss';

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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Hamburger;