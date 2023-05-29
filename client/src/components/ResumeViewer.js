import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ResumeViewer = ({ resume, user }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [resumeData, setResumeData] = useState([])

    useEffect(() => {
        fetch(`/resumes/3`)
            .then(res => res.json())
            .then(data => setResumeData(data))
        // fetch(`/resumes/${resume}`)
        //     .then(res => res.json())
        //     .then(data => setResumeData(data))
    }, [])

    // const contactsText = resumeData.contacts.map(contact => (
    //     <>
    //         <h2>{contact.platform}</h2>
    //         <span>{contact.url}</span>
    //     </>
    // ))

    return (
        <div id='resume-container'>
            <div id='resume-corner'>
                <div id='resume-picture-wrapper'>
                    <img id="resume-headshot" src={resumeData.user_image} alt="profile picture" />
                </div>
            </div>
            <div id='resume-header'>
                <div id='resume-title-wrapper'>
                    <h1>{user.name}</h1>
                    <h3>{resumeData.title}</h3>
                </div>
            </div>
            <div id='resume-sidebar'>
                <div id='resume-about'>
                    <h2>About Me:</h2>
                    <p>{resumeData.about}</p>
                </div>
                <div id='resume-contacts'>
                    <h2>Reach Me Here:</h2>
                    {/* {contactsText} */}
                </div>
            </div>
            <div id='resume-body'>
                
            </div>
        </div>
    )
}

export default ResumeViewer;