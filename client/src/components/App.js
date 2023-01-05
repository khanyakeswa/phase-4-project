import '../css/App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ProfileBrowser from './ProfileBrowser';
import ProjectBrowser from './ProjectBrowser';
import ResumeViewer from './ResumeViewer';
import ProjectViewer from './ProjectViewer';
import SignupPage from './SignupPage';
import UserDashboard from './UserDashboard';
import Nav from './Nav';

function App() {

  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [projectId, setProjectId] = useState(0)

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
  const [searchText, setSearchText] = useState('')
  console.log(searchText)

  if (errors) return <h1>{errors}</h1>
  return (
    <div className='App' style={{backgroundImage: "url(/background-01.jpg)"}}>
      <Nav setSearchText={setSearchText} currentUser={currentUser} updateUser={updateUser}/>
      {/* {currentUser ? <LoginPage error={'Please Login'} updateUser={updateUser} /> : */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage updateUser={updateUser} />} />
        <Route path="/signup" element={<SignupPage updateUser={updateUser} />} />
        <Route path="/dashboard" element={<UserDashboard user={currentUser}/>} />
        <Route path="/resume-view" element={<ResumeViewer />} />
        <Route path="/projects" element={<ProjectBrowser />} />
        <Route path="/profiles" element={<ProfileBrowser searchResult={searchText} />} />
        <Route path="/project-view" element={<ProjectViewer projectId={projectId} />} />
      </Routes>
      {/* } */}
    </div>
  );
}

export default App;
