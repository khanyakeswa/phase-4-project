import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UserDashboard = ({ user }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div id='dashboard-container'>
            <div id='side-bar'>
                <div id='resumes-container'>
                    <h2>My Résumés</h2>
                    <div className='resume-tile'>
                        <h2>Resumè 1</h2>
                    </div>
                    <div className='resume-tile'>
                        <h2>Resumè 2</h2>
                    </div>
                    <div className='resume-tile'>
                        <h2>Resumè 3</h2>
                    </div>
                    <div className='button-2'>
                        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path className="b" d="m35.28,22.58h-7.86v-7.86c0-1.34-1.08-2.42-2.42-2.42s-2.42,1.08-2.42,2.42v7.86h-7.86c-1.34,0-2.42,1.08-2.42,2.42s1.08,2.42,2.42,2.42h7.86v7.86c0,1.34,1.08,2.42,2.42,2.42s2.42-1.08,2.42-2.42v-7.86h7.86c1.34,0,2.42-1.08,2.42-2.42s-1.09-2.42-2.42-2.42Z" /><path class="b" d="m25,0C11.21,0,0,11.21,0,25s11.21,25,25,25,25-11.21,25-25S38.79,0,25,0Zm0,45.17c-11.12,0-20.17-9.04-20.17-20.17S13.88,4.83,25,4.83s20.17,9.05,20.17,20.17-9.05,20.17-20.17,20.17h0Z" /></svg>
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