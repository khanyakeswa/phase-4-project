import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function ProjectSearch({proData}) {
    return (
        <div>
            <p>{proData.name}</p>
        </div>
    )
}

export default ProjectSearch;