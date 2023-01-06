import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ProjectViewer({ userId }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/resume_projects").then((res) => {
      res.json().then((data) => {
        setProjectData(data);
      });
    });
  }, []);

  return (
    <div className="ProjectViewer">
      <div className="project-content">
        <div className="image-title-wrapper">
          {projectData.map((eachObj) => {
            if (eachObj.id === 1) {
              return (
                <>
                  <img
                    key={eachObj.id + 1}
                    className="project-collaborator-pic"
                    src={`${eachObj.resume.user_image}`}
                    alt=""
                  />
                  <img
                    key={eachObj.id + 2}
                    className="project-collaborator-pic"
                    src={`${eachObj.resume.user_image}`}
                    alt=""
                  />
                  <img
                    key={eachObj.id + 3}
                    className="project-collaborator-pic"
                    src={`${eachObj.resume.user_image}`}
                    alt=""
                  />
                  <img
                    key={eachObj.id + 4}
                    className="project-collaborator-pic"
                    src={`${eachObj.resume.user_image}`}
                    alt=""
                  />
                </>
              );
            }
          })}
          <div className="project-title">
            {projectData.map((eachObj) => {
              if (eachObj.id === 1) {
                return (
                  <>
                    <span className="project-title-span1">
                      {eachObj.project.name}
                    </span>
                    <span>{eachObj.project.collaborators}</span>
                  </>
                );
              }
            })}
          </div>
        </div>
        <div>
          {projectData.map((eachObj) => {
            if (eachObj.id === 1) {
              return (
                <>
                  <p>{eachObj.project.project_data}</p>
                  <div>
                    <a href= {`${eachObj.project.project_link}`}>{eachObj.project.project_link}</a>
                  </div>
                  <img
                    className="project-image"
                    src={`${eachObj.project.project_video}`}
                    alt=""
                  />
                </>
              );
            }
          })}
        </div>
      </div>
      <div className="projet-content-side-bar">
        {/* I can have a share button here that copies the url to your clipboard */}
      </div>
    </div>
  );
}

export default ProjectViewer;
