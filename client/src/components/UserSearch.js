import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const UserSearch = ({userData}) => {
    console.log(userData);
    const handleClick = (e) => {
        
    }

    return (
        <div>
            {userData.user.image_url ? (
                <img className= "userSearchImg" src={userData.user.image_url} alt="Profile Logo" />)
             :<img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Log In"/>}
            <h4 className= "userSearchImg" onClick={handleClick}>{userData.user.username}</h4>
            <br></br>
            <p>{userData.user.about}</p>
        </div>
    )
}

export default UserSearch;