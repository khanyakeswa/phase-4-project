import React from "react";

const ProjectEntry = ({project}) => {
    return (
        <li>
            <span>{project.project_video}</span>
            <span>{project.name}</span>
            <span>{project.project_data}</span>
        </li>
    )
}

export default ProjectEntry;