import React, { useEffect, useState } from "react";
import "./projects.scss";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import projectsData from "../../../asserts/data/projectsData.json";

import MaazAnsariPortfolio from "../../../asserts/images/project-images/maaz-ansari-portfolio.png";

function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projectsData);
  }, []);

  if (!data) return null; 

  return (
    <section>
      <div className="project-sec">
        <div className="project-wrap">
          <div className="project-head">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>

          {data.projects.map((project, index) => (
            <div className="project-container" key={index}>
              <div className="project-screen-container">
                <div className="project-screen">
                    <img src={MaazAnsariPortfolio} alt="Project Img1" />
                </div>
              </div>

              <div className="project-txt-container">
                <div className="project-txt-wrap">
                  <h1>{project.name}</h1>
                  <h2>Tech: {project.tech}</h2>
                  <p>{project.description}</p>
                </div>
                <div className="project-btn-wrap">
                  <div className="project-btn">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubButtonName}</a>
                    <GoArrowRight />
                  </div>
                  <div className="project-btn">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.liveButtonName}</a>
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
