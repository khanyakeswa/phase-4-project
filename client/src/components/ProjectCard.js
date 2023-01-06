import React, { useState } from "react";

function ProjectCard({project}) {
  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={project.project_video}
          alt="profile picture"
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{project.name}</div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
