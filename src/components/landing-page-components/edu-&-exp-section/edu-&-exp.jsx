import React, { useEffect, useState } from "react";
import './edu-&-exp.scss';
import eduExpData from '../../../asserts/data/eduExpData.json';

const EduExpSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(eduExpData);
    }, []);

    if (!data) return null;

    return (
        <section id="edu-exp-section">
            <div className="edu-exp-sec">
                <div className="edu-exp-wrap">
                    <div className="edu-wrap">
                        <div className="edu-head-wrap">
                            <p>{data.sectionTitle}</p>
                            <h1>{data.sectionSubtitle}</h1>
                        </div>

                        <div className="edu-content">
                            {data.experiences.map((exp, index) => (
                                <div className="edu-txt-wrap" key={index}>
                                    <div className="course-wrap">
                                        <h2>{exp.title}</h2>
                                    </div>
                                    <div className="college-wrap">
                                        {exp.organizationLink ? (
                                            <a href={exp.organizationLink} target="_blank" rel="noopener noreferrer">
                                                <h3>{exp.organization}</h3>
                                            </a>
                                        ) : (
                                            <a href={exp.organizationLink} target="_blank" rel="noopener noreferrer">
                                                <h3>{exp.organization}</h3>
                                            </a>    
                                        )}
                                    </div>
                                    <div className="year-wrap">
                                        <p>{exp.year}</p>
                                    </div>
                                    <div className="edu-summary-wrap">
                                        <p>{exp.summary}</p>
                                    </div>
                                </div>
                            ))}

                            {data.education.map((edu, index) => (
                                <div className="edu-txt-wrap" key={index}>
                                    <div className="course-wrap">
                                        <h2>{edu.degree}</h2>
                                    </div>
                                    <div className="college-wrap">
                                        {edu.institutionLink ? (
                                            <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer">
                                                <h3>{edu.institution}</h3>
                                            </a>
                                        ) : (
                                            <h3>{edu.institution}</h3>
                                        )}
                                    </div>
                                    <div className="year-wrap">
                                        <p>{edu.year}</p>
                                    </div>
                                    <div className="edu-summary-wrap">
                                        <p>{edu.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EduExpSection;
