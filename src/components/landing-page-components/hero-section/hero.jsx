import React, { useEffect, useState } from "react";
import "./hero.scss";
import ProfileTypewriter from "../../profile-typewriter/profile-typewriter";
import heroData from "../../../asserts/data/heroData.json";
import ProfileImg from "../../../asserts/images/landing-page-images/profilepic11.png";

function HeroSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(heroData);
  }, []);

  if (!data) return null;
  return (
    <>
      <section className="hero-section">
        <div className="hz-profile-content">
          <p className="hz-year-txt">{data.year}</p>
          <span></span>
          <p className="hz-profile-txt">{data.role}</p>
        </div>

        <div className="hero">

          <div className="hero-content">
            <h1>{data.greeting}</h1>
            
            <div className="hero-txt">
              <span className="hero-profile-vl"></span>
              <div className="profile-txt">
                <p>{data.intro}</p>
              </div>
            </div>

            <div className="writing-profile-txt">
              <ProfileTypewriter />
            </div>
          </div>
          
          <div className="profile-image-container"></div>
        </div>

      </section>
    </>
  );
}

export default HeroSection;
