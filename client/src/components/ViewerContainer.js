import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, Form } from 'react-router-dom';
import ProfileViewer from './ProfileViewer';
import ProjectViewer from './ProjectViewer';

const ViewerContainer = ({user, view}) => {
    const userProfile = user.map(data => <ProfileViewer  />)

    if (view) {
        return (
            <div>
                
            </div>
        )
    }
}

export default ViewerContainer;