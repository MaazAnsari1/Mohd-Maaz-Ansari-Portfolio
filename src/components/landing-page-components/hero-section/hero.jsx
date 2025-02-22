import React from "react";
import "./hero.scss";

import { AiOutlineArrowDown } from "react-icons/ai";
import ProfileTypewriter from "../../profile-typewriter/profile-typewriter";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="hero">
          <div className="hz-profile-content">
            <p className="hz-year-txt">2025</p>
            <span></span>
            <p className="hz-profile-txt">Front End Developer</p>
          </div>

          <div className="hero-content">
            <h1>Hello</h1>
            <div className="hero-txt">
              <span className="hero-profile-vl"></span>
              <div className="profile-txt">
                <p>
                  It's Maaz Ansari, a
                </p>
                <span className="writing-profile-txt">
                  {/* <ProfileTypewriter />  */}
                </span>
              </div>
            </div>
          </div>

          <div className="scroll-btn-wrap">
            <a href="#visit-about-section">
              Scroll Down
              <div className="scroll-down-arrow">
                <AiOutlineArrowDown />
              </div>
            </a>
          </div>
        </div>

        <div className="profile-image-container"></div>
      </section>
    </>
  );
}

export default HeroSection;
