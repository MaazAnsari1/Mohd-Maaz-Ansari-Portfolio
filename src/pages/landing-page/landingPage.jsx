import React from "react";
import './landingPage.scss';
import Navbar from "../../components/navbar-components/navbar/navbar";
import HeroSection from "../../components/landing-page-components/hero-section/hero";
import AboutSection from "../../components/landing-page-components/about-section/about";
import ServiceSection from "../../components/landing-page-components/service-section/service";
import EduExpSection from "../../components/landing-page-components/edu-&-exp-section/edu-&-exp";
import VisionSection from "../../components/landing-page-components/vision-section/vision";
import SkillSection from "../../components/landing-page-components/skill-section/skill";



function LandingPage () {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <EduExpSection />
            <VisionSection />
            <SkillSection />
        </>
    );
}

export default LandingPage;
