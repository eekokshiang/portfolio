import React, { useState } from "react";

import PortfolioPanel from "../../components/PortfolioPanel/PortfolioPanel";
import ProjectList from "./ProjectList/ProjectList";
import Modal from "../../components/Modal/Modal";

import "./Portfolio.scss";

const Portfolio = () => {
  const projects = ProjectList();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-main-container">
      {projects.map((projectList, index) => (
        <PortfolioPanel
          key={index}
          date={projectList.date}
          title={projectList.title}
          desc={projectList.desc}
          image={projectList.image}
          onClick={
            index === 0 ? undefined : () => setSelectedProject(projectList)
          }
          className={
            index === 0
              ? "panel-main-container disabled"
              : "panel-main-container"
          }
        />
      ))}

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;
