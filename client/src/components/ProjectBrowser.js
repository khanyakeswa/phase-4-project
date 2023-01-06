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


    return (
        <div id='projects-container'>
            <div id='filters-wrapper'> 
                <form>
                    <input onChange={handleSearch} value={searchValue} type="text" id="search-input" placeholder="Names, Usernames or Skills" />
                    <input type="submit" id="search-submit" value="Search"></input>
                </form>
                <div className='sort-cat-wrapper'>
                    <div className="active">
                        <div onClick={sortByName} className="sort-button">
                            <span>Sort by Name</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="project-tiles-container">
                {renderProjects}
            </div>
        </div>
    )
}

export default ProjectBrowser;
