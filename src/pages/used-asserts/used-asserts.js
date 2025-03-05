import React from 'react';
import './used-asserts.scss';

import LandingPageImgage from "../../asserts/images/landing-page-images/profilepic11.png";
import AboutImage from "../../asserts/images/about-images/about-img.jpg";
import MaazAnsariPortfolio from "../../asserts/images/project-images/maaz-ansari-portfolio.png";
import ReactJS from "../../asserts/images/skill-images/react-logo.png";
import JavaScript from "../../asserts/images/skill-images/JavaScript-logo.png";
import HTML from "../../asserts/images/skill-images/html5-logo.png";
import CSS from "../../asserts/images/skill-images/css3-logo.png";
import SCSS from "../../asserts/images/skill-images/scss-sass-logo.png";
import Bootstrap from "../../asserts/images/skill-images/bootstrap-logo.png";
import MaterialUI from "../../asserts/images/skill-images/material-ui-logo.png";
import Git from "../../asserts/images/skill-images/git-logo.png";

import MaazAnsariCV from "../../asserts/doc/Maaz-Ansari-CV.pdf";

function usedAsserts() {

    return (
        <>
            <section className="used-assert-container">
                <div className="used-assert-wrap">
                    <div className="used-assert-head">
                        <h1>Used Asserts</h1>
                    </div>
                    <div className="used-assert-body">
                        <div className="used-image-wrap">
                            <div className="used-image-head">
                                <h3>Used Images</h3>
                            </div>
                            <div className="used-image-body">
                                <div className="used-image-item">
                                    <img src={LandingPageImgage} alt="Landing Page Img" />
                                    <p>Landing Page Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={AboutImage} alt="About Img" />
                                    <p>About Page Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={MaazAnsariPortfolio} alt="Project-1 Img" />
                                    <p>Project | Maaz Ansari Portfolio</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={ReactJS} alt="ReactJS Img" />
                                    <p>Skill | ReactJS Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={JavaScript} alt="JavaScript Img" />
                                    <p>Skill | JavaScript Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={HTML} alt="HTML5 Img" />
                                    <p>Skill | HTML5 Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={CSS} alt="CSS3 Img" />
                                    <p>Skill | CSS3 Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={SCSS} alt="SCSS Img" />
                                    <p>Skill | SCSS Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={Bootstrap} alt="Bootstrap Img" />
                                    <p>Skill | BootStrap Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={MaterialUI} alt="Material UI Img" />
                                    <p>Skill | Material UI Image</p>
                                </div>
                                <div className="used-image-item">
                                    <img src={Git} alt="Git Img" />
                                    <p>Skill | Git Image</p>
                                </div>
                            </div>
                        </div>

                        <div className="used-doc-wrap">
                            <div className="used-doc-head">
                                <h3>Used Documents</h3>
                            </div>
                            <div className="used-doc-body">
                                <div className="used-doc-item">
                                    <a href={MaazAnsariCV} rel='noreferrer noopener' target='_blank'>Maaz Ansari CV | Click to Download</a>
                                    <p>Maaz Ansari CV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default usedAsserts;
