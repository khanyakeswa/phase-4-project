import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProjectCard from './ProjectCard';


const ProjectBrowser = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [projectData, setProjectData] = useState([])
    const [endResultArray, setEndResultArray] = useState(projectData)
    const [searchValue, setSearchValue] = useState('')

    const sortByName = (e) => {
        fetch("/sort_by_project_name")
            .then((res) => {
            if (res.ok) {
                res.json()
                .then(data => {
                    setProjectData(data)
                    setEndResultArray(data)
                })

            }
            })
    }

    useEffect(() => {
        fetch("/projects")
            .then((res) => {
            if (res.ok) {
                res.json()
                .then(data => {
                    setProjectData(data)
                    setEndResultArray(data)
                })

            }
            })
        }, [])

        function handleSearch(e){
            setSearchValue(e.target.value)
            const filteredProjects = projectData.filter( eachProjectObj => {
                return eachProjectObj.name.toLowerCase().includes(searchValue.toLowerCase())})
                setEndResultArray(filteredProjects)
                
            }
        const renderProjects = endResultArray.map((eachProjectObj) => {
            console.log(eachProjectObj)
            return <ProjectCard key={eachProjectObj.id} project = {eachProjectObj} />
        })
        const [isActive, setActive] = useState(false);
        const handleShowMenu = (e) => {
            setActive(!isActive);
        };


    return (
        <div>
            <div>
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
                    </div>
                </div>
            </div>
            <ul className="cards">
                {renderProjects}
            </ul>
        </div>
        </div>
    )
}

export default ProjectBrowser;
