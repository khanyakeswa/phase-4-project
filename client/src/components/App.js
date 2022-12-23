import '../css/App.css';
import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ProfileBrowser from './ProfileBrowser';
import ProjectBrowser from './ProjectBrowser';
import ResumeViewer from './ResumeViewer';
import SignupPage from './SignupPage';
import UserDashboard from './UserDashboard';


function App() {
  let activeNavClass = 'nav active';

  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              updateUser(user);
            });
        }
      })
  }, [])

  const updateUser = (user) => setCurrentUser(user)

  if (errors) return <h1>{errors}</h1>
  return (
    <div>
      {/* <h2>🏠 Home | Projects | Resumes | Professionals | Search | 👤 Account</h2> */}
      <nav>
        <div className='navlink-button'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
            🏠 Home
          </NavLink>
        </div>
        <div className='navlink-button'>
          <NavLink to={'/login'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
            Log In
          </NavLink>
        </div>
        <div className='navlink-button'>
          <NavLink to={'/projects'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
            Browse Projects
          </NavLink>
        </div>
        <div className='navlink-button'>
          <NavLink to={'/resume-view'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
            Resumes
          </NavLink>
        </div>
        <div className='navlink-button'>
          <NavLink to={'/profiles'} className={({ isActive }) => isActive ? activeNavClass : 'nav'}>
            👤 Profiles
          </NavLink>
        </div>
        <div id="search-bar-wrapper">
          <form>
            <input type="text" placeholder="Search" id="search-bar" />
            <input type="submit" value="Search" />
          </form>
        </div>
      </nav>
      {/* {currentUser ? <LoginPage error={'Please Login'} updateUser={updateUser} /> : */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage updateUser={updateUser} />} />
          <Route path="/signup" element={<SignupPage updateUser={updateUser} />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/resume-view" element={<ResumeViewer />} />
          <Route path="/projects" element={<ProjectBrowser />} />
          <Route path="/profiles" element={<ProfileBrowser />} />
        </Routes>
      {/* } */}
    </div>
  );
}

export default App;
