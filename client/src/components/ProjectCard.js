import React, { useState } from "react";

function ProjectCard({project}) {
  
  return (
    <div className="cards_item">
      <div className="card">
        <img
          src={project.project_video}
          alt="profile picture"
          className="card_image"
        />
        <div className="card_content">
          <div className="card_title">{project.name}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
