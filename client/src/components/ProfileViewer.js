import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, Form } from 'react-router-dom';

const ProfileViewer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userInfo, setUserInfo] = useState([]);

    return (
        <div>
            <h1>You are on {location.pathname}</h1>
        </div>
    )
}

export default ProfileViewer;