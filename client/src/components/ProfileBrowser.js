import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ProfileBrowser = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [resumeData, setResumeData] = useState([])
    const [endResultArray, setEndResultArray] = useState(resumeData)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch("/resumes")
          .then((res) => {
            if (res.ok) {
              res.json()
                .then(data => {
                    setResumeData(data)
                    setEndResultArray(data)
                })

            }
          })
      }, [])

    function handleSearch(e){
        setSearchValue(e.target.value)
        const filteredProfiles = resumeData.filter( eachResumeObj => {
            return eachResumeObj.user.name.toLowerCase().includes(searchValue.toLowerCase()) || eachResumeObj.user.username.toLowerCase().includes(searchValue.toLowerCase()) || eachResumeObj.experience.toLowerCase().includes(searchValue.toLowerCase()) || eachResumeObj.skills.toLowerCase().includes(searchValue.toLowerCase())})
            setEndResultArray(filteredProfiles)
            
        }
            const renderProfiles = endResultArray.map((eachResumeObj) => {
                return <ProfileCard key={eachResumeObj.id} resume = {eachResumeObj} />
            })
 
    return (
        <div>
            <div> 
                <div className="SearchBox">
                    <input onChange={handleSearch} value={searchValue} type="text" className="SearchBox-input" placeholder="name, username or skills" />
                    <button className="SearchBox-button">
                        <i className="SearchBox-icon  material-icons">search</i>
                    </button>
                </div>
                <button className="btn btn-4 btn-sep icon-send">
                    sort by
                    {/* i want a hover over that shows dropdown for filter by profession or skills
                        then a carosell of keyword search cards will populate below like google image search
                        maybe I'll use an api
                        you can click on the card and it will set the search value to that
                    */}
                    <span></span>
                </button>
            </div>
            <ul className="cards">
                {renderProfiles}
            </ul>
        </div>
    )
}

export default ProfileBrowser;