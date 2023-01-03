import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";

const Nav = ({ currentUser, updateUser }) => {
    let activeNavClass = 'nav active';

    return (
        <nav>
            <div className="navlink-wrapper">
                <div className='navlink-button'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
                        🏠 Home
                    </NavLink>
                </div>
                {currentUser ? null :
                    <div className='navlink-button'>
                        <NavLink to={'/login'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
                            Log In
                        </NavLink>
                    </div>}
                <div className='navlink-button'>
                    <NavLink to={'/projects'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
                        Browse Projects
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
                        👤 Dashboard
                    </NavLink>
                </div>
                <div className='navlink-button'>
                    <NavLink to={'/resume-view'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
                        Resumè
                    </NavLink>
                </div>
            </div>
            <div id="logo-wrapper">
                <img src={"./logo.png"}></img>
            </div>
            <UserMenu currentUser={currentUser} updateUser={updateUser} />
        </nav>
    )
}

export default Nav;