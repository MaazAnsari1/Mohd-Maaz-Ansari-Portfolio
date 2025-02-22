import React from "react";
import './edu-&-exp.scss';

import EducationIcon from "../../../asserts/icons/education-icon.png";
import ExperienceIcon from "../../../asserts/icons/job-icon.png";

const EduExpSection = () => {
    return (
        <>
            <section id="edu-exp-section">
                <div className="edu-exp-sec">
                    <div className="edu-exp-wrap">

                        {/* Education Section Started Here */}
                        <div className="edu-wrap">
                            <div className="edu-head-wrap">
                                <p>Education & Experience</p>
                                <h1>Mastery through Education and Practice.</h1>
                            </div>

                            <div className="edu-content">

                                <div className="edu-txt-wrap">

                                    <div className="course-wrap">
                                        <h2>Full Stack Web Developement Intern</h2>
                                    </div>

                                    <div className="college-wrap">
                                        <a>
                                            <h3>Codeango Private Limited</h3>
                                        </a>
                                    </div>

                                    <div className="year-wrap">
                                        <p>02/2023 - 04/2023</p>
                                    </div>

                                    <div className="edu-summary-wrap">
                                        <p>
                                            Completed a 2-month Full Stack Web Development Internship 
                                            at Codeango (OPC) Private Limited, Aurangabad. 
                                            Developed an official website on WIX and 
                                            another using React.js, HTML, CSS, Express, Node.js, MongoDB, and REST APIs.
                                        </p>
                                    </div>
                                </div>

                                <div className="edu-txt-wrap">

                                    <div className="course-wrap">
                                        <h2>B-Tech in Computer Science Engineering</h2>
                                    </div>

                                    <div className="college-wrap">
                                        <a href="https://www.hitechengg.edu.in/" target="_blank">
                                            <h3>Hi-Tech Institute</h3>
                                        </a>
                                    </div>

                                    <div className="year-wrap">
                                        <p>2020 - running</p>
                                    </div>

                                    <div className="edu-summary-wrap">
                                        <p>
                                            Currently pursuing a B-Tech in Computer Science Engineering 
                                            at Hi-Tech Institute of Information & Technology, 
                                            Aurangabad, deepening my knowledge and technical proficiency. 
                                            This program is further enhancing my skills 
                                            and preparing me for future opportunities in the field.
                                        </p>
                                    </div>
                                </div>

                                <div className="edu-txt-wrap">
                                    <div className="course-wrap">
                                        <h2>Diploma in Computer Science Engineering</h2>
                                    </div>

                                    <div className="college-wrap">
                                        <a href="https://www.jamiapolytechnic.org/" target="_blank">
                                            <h3>Jamia Polytechnic</h3>
                                        </a>
                                    </div>

                                    <div className="year-wrap">
                                        <p>2018 - 2020</p>
                                    </div>

                                    <div className="edu-summary-wrap">
                                        <p>
                                            Earned a Diploma in Computer Science Engineering 
                                            from Jamia Polytechnic Akkalkuwa. 
                                            Gained strong technical skills and knowledge, 
                                            along with problem-solving abilities. 
                                            Prepared for advanced studies and professional opportunities.
                                        </p>
                                    </div>
                                </div>

                                <div className="edu-txt-wrap">
                                    <div className="course-wrap">
                                        <h2>ssc (10th)</h2>
                                    </div>

                                    <div className="college-wrap">
                                        <a>
                                            <h3>Rafiuddin Fakih Boys' High School</h3>
                                        </a>
                                    </div>

                                    <div className="year-wrap">
                                        <p>2017 - 2018</p>
                                    </div>

                                    <div className="edu-summary-wrap">
                                        <p>
                                            Completed my education from 5th class to SSC 
                                            at Rafiuddin Fakih Boys' High School, 
                                            building a strong academic foundation and 
                                            fostering personal growth. 
                                            Developed essential skills that set the stage for future success.
                                        </p>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default EduExpSection;