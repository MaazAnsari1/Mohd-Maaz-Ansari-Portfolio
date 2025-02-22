import React from "react";
import './skill.scss';

import ReactJSPng from "../../../asserts/logo/react-logo.png";
import JavaScriptPng from "../../../asserts/logo/JavaScript-logo.png";
import HTMLPng from "../../../asserts/logo/html5-logo.png";
import CSSPng from "../../../asserts/logo/css3-logo.png";
import SCSSPng from "../../../asserts/logo/scss-sass-logo.png";
import BootstrapPng from "../../../asserts/logo/bootstrap-logo.png";
import MaterialUIPng from "../../../asserts/logo/material-ui-logo.png";
import GitPng from "../../../asserts/logo/git-logo.png";

import ResumePDF from "../../../asserts/doc/Maaz-Ansari-CV.pdf";

const SkillSection = () => {
    return (
        <>
            <section>
                <div className="skill-sec">
                    <div className="skill-wrap">
                        <div className="skill-content">
                            <div className="skill-head">
                                <span></span>
                                <p>My Skills</p>
                            </div>

                            <div className="skill-body">
                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={ReactJSPng} alt="React JS" />
                                    </div>

                                    <div className="skill-name">
                                        <p>React JS</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={JavaScriptPng} alt="JavaScript" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>JavaScript</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={HTMLPng} alt="HTML5" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>HTML</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={CSSPng} alt="CSS3" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>CSS</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={SCSSPng} alt="SCSS" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>SCSS</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={BootstrapPng} alt="Bootstrap" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>Bootstrap</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={MaterialUIPng} alt="Material UI" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>Material UI</p>
                                    </div>
                                </div>

                                <div className="skill-box">
                                    <div className="skill-png-wrap">
                                        <img src={GitPng} alt="Git" />
                                    </div>
        
                                    <div className="skill-name">
                                        <p>Git</p>
                                    </div>
                                </div>
                            </div>

                            <div className="download-cv-wrap">
                                <a href={ResumePDF} rel="noopener noreferrer" target="_blank">
                                    <button type="button" className="download-cv-btn">Download Resume</button>
                                </a>
                            </div>
                        </div>

                        <div className="skill-img-body"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillSection;