import React from'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <h1>{location.pathname}</h1>
        </div>
    )
}

export default LandingPage;