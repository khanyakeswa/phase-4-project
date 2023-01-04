import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const UserSearch = ({userData}) => {
    const handleClick = (e) => {
        
    }

    return (
        <div>
            <h4 onClick={handleClick}>{userData.user.name}</h4>
            <br></br>
            <p>{userData.about}</p>
        </div>
    )
}

export default UserSearch;