import React from "react";
import './landingPage.scss';
import HeroSection from "../../components/landing-page-components/hero-section/hero";
import AboutSection from "../../components/landing-page-components/about-section/about";
import ServiceSection from "../../components/landing-page-components/service-section/service";
import EduExpSection from "../../components/landing-page-components/edu-&-exp-section/edu-&-exp";
import VisionSection from "../../components/landing-page-components/vision-section/vision";
import SkillSection from "../../components/landing-page-components/skill-section/skill";
import Projects from "../../components/landing-page-components/projects-section/projects";



function LandingPage () {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <EduExpSection />
            <VisionSection />
            <SkillSection />
            <Projects />
        </>
    );
}

export default LandingPage;
