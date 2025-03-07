import React, { useEffect, useState } from "react";
import "./skill.scss";
import skillsData from "../../../asserts/data/skillsData.json";

const SkillSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(skillsData);
    }, []);

    if (!data) return null; 

    return (
        <section>
            <div className="skill-sec">
                <div className="skill-wrap">
                    <div className="skill-content">
                        <div className="skill-head">
                            <span></span>
                            <p>{data.title}</p>
                        </div>

                        <div className="skill-body">
                            {data.skills.map((skill, index) => (
                                <div className="skill-box" key={index}>
                                    <div className="skill-png-wrap">
                                        <img src={skill.imageUrl} alt={skill.name} />
                                    </div>
                                    <div className="skill-name">
                                        <p>{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="download-cv-wrap">
                            <a href={data.ResumePDF} rel="noopener noreferrer" target="_blank">
                                <button type="button" className="download-cv-btn">{data.ResumeButtonName}</button>
                            </a>
                        </div>
                    </div>

                    <div className="skill-img-body"></div>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;
