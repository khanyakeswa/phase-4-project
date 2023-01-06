import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ProfileBrowser = ({resumeData}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [resumeData, setResumeData] = useState([])
    const [endResultArray, setEndResultArray] = useState(resumeData)
    const [searchValue, setSearchValue] = useState('')

    const sortByName = (e) => {
        fetch("/sort_by_name")
            .then((res) => {
            if (res.ok) {
                res.json()
                .then(data => {
                    setResumeData(data)
                    setEndResultArray(data)
                })

            }
            })
    }

    const sortByProfession = (e) => {
        fetch("/sort_by_title")
        .then((res) => {
        if (res.ok) {
            res.json()
            .then(data => {
                setResumeData(data)
                setEndResultArray(data)
            })

        }
        })
    }

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
    const [isActive, setActive] = useState(false);
    const handleShowMenu = (e) => {
        setActive(!isActive);
    };
 
    return (
        <div>
                <div className="SearchBox">
                    <input onChange={handleSearch} value={searchValue} type="text" className="SearchBox-input" placeholder="name, username or skills" />
                    <button className="SearchBox-button">
                        <i className="SearchBox-icon  material-icons">search</i>
                    </button>
                </div>
                <div onClick={handleShowMenu} className="btn btn-4 btn-sep icon-send">
                    sort by
                    <div className={isActive ? "active" : "inactive"}>
                        <div onClick={sortByName} className="menu-link">
                            <span>name</span>
                        </div>
                        <div onClick={sortByProfession} className="menu-link">
                            <span>profession</span>
                        </div>
                </div>
            </div>
            <ul className="cards">
                {renderProfiles}
            </ul>
        </div>
    )
}

export default ProfileBrowser;