import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ProfileBrowser = ({searchResult}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [resumeData, setResumeData] = useState([])

    useEffect(() => {
        fetch("/resumes")
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((fetchedData) => setResumeData(fetchedData));
            }
          })
      }, [])

      console.log(resumeData)

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