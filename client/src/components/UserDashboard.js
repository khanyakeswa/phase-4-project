import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UserDashboard = ({ user }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div id='dashboard-container'>
            <div id='side-bar'>
                <div id='resumes-container'>
                    <div className='resume-tile'>
                        <h2>Resumè 1</h2>
                    </div>
                    <div className='resume-tile'>
                        <h2>Resumè 2</h2>
                    </div>
                    <div className='resume-tile'>
                        <h2>Resumè 3</h2>
                    </div>
                </div>
                <div id='projects-container'>

                </div>
            </div>
            <div id='profile-container'>
                <div id='headshot-img-wrapper'>
                    <img id='headshot-img' src='/images/headshot.png' />
                </div>
                <div id='title-wrapper'>
                    <span id='title-header'>{user.name}</span>
                    <span id='title-subheader'>{user.username}</span>
                </div>
                <div id='profile-body'>
                    <div id='socials-container'>

                    </div>
                </div>
            </div>
            <div id='social-container'></div>
        </div>
    )
}

export default UserDashboard;