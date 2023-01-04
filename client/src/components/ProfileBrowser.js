import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ProfileBrowser = ({resumeData}) => {
    const navigate = useNavigate();
    const location = useLocation();


    const renderProfiles = resumeData.map((eachResumeObj) => {
        return <ProfileCard key={eachResumeObj.id} resume = {eachResumeObj} />
    })
 
    return (
        <div>
            <div> 
                <button className="btn btn-4 btn-sep icon-send">
                    filter by
                </button>
                <div class="SearchBox">
                    <input type="text" class="SearchBox-input" placeholder="name or username" />
                    <button class="SearchBox-button">
                        <i class="SearchBox-icon  material-icons">search</i>
                    </button>
                </div>
            </div>
            <ul className="cards">
                {renderProfiles}
            </ul>
        </div>
    )
}

export default ProfileBrowser;