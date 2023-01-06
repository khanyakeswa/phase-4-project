import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function ProjectSearch({proData}) {
    return (
        <div>
            <img src={proData.project_video} alt="Project Image"/>
            <br></br>
            <p>{proData.name}</p>
            <h4>Collaborators</h4>
            <p>{proData.collaborators}</p>
        </div>
    )
}

export default ProjectSearch;