import React from'react';
import { useNavigate, useLocation, Form } from 'react-router-dom';
import ProjectSearch from './ProjectSearch';
import UserSearch from './UserSearch';

const SearchPage = ({searchResult, users, userData, projects}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const proSearch = projects.map(project => <ProjectSearch proData = {project}/>)
    const userSearch = users.map(user => <UserSearch userData = {user}/>)
    
    
    return (
            <div>
            <h1>{location.pathname}</h1>
            <div className='userSearch'>
                <h1>Users</h1>
                {userSearch}
            </div>
            <div className='projectSearch'>
                <h1>Projects</h1>
                {proSearch}
            </div>
        </div>
    )
}

export default SearchPage;