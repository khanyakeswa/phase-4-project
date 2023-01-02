import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserMenu = ({ currentUser, updateUser }) => {
    const navigate = useNavigate()
    const userImg = "https://media.licdn.com/dms/image/C5603AQGK91aMiW1wAw/profile-displayphoto-shrink_400_400/0/1614794314189?e=1677715200&v=beta&t=durJZXKIsqqnFkDr2ThqRhe3ErtZtUNdicZ3Uim0njY"
    
    const logoutHandler = () => {
        fetch(`/logout`, {
            method: "DELETE"
        })
        .then(res => {
            if (res.ok) {
                updateUser(false)
                navigate("/login")
            }
        })
    }
    
    const loginHandler = () => {
        navigate("/login")
    }

    const menuLinkHandler = () => {
        navigate("/dashboard")
    }

    //toggle dropdownmenu for profile picture click
    const [isActive, setActive] = useState(false);
    const handleShowMenu = (e) => {
    setActive(!isActive); 
    }

    return (
        <div id="user-search-wrapper">
            <div id="search-bar-container">
                <form>
                    <input id="search-input" type="text" placeholder="Search" />
                    <input id="search-submit" type="submit" value="Search" />
                </form>
            </div>
            <div id="user-menu-container" onClick={handleShowMenu}>
                <div id="user-menu-picture-wrapper" className="user-menu-picture-wrapper" >
                    {currentUser ?
                        <img className="profile-pic-1" alt="headshot" src={userImg}></img> :
                        <img className="profile-pic-1" alt="headshot" src="https://thenounproject.com/api/private/icons/1594259/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjrc_mLVvesnKB_dIt_bqa3nHP03RRBj1IR1IGfHBz7fUkFnJzL9G9r_wWbmH_JjrvYDWSkgLdQfp3aFu1OUIUYP2diA%3D%3D"></img>}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15.13"><path d="m12.49,15.13c.69,0,1.38-.27,1.87-.78l9.87-9.84c1.02-1.02,1.02-2.71,0-3.73-1.02-1.02-2.71-1.02-3.73,0l-8.01,7.98L4.52.77C3.49-.26,1.81-.26.78.77c-.51.51-.78,1.2-.78,1.87s.27,1.35.78,1.87l9.84,9.84c.48.51,1.17.78,1.87.78h0Z" /></svg>
                </div>
                {currentUser ? <div className={isActive? "active" : "inactive"} id="user-menu" >
                    <div onClick={menuLinkHandler} className="menu-link">
                        <span>Dashboard</span>
                    </div>
                    <div className="menu-link">
                        <span>Settings</span>
                    </div>
                    <button className="button-1" onClick={logoutHandler}>Log Out</button>
                </div> :
                    <div className={isActive? "active" : "inactive"} id="user-menu">
                        <button className="button-1" onClick={loginHandler}>Log In</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserMenu