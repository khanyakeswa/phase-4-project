import '../css/App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ProfileBrowser from './ProfileBrowser';
import ProjectBrowser from './ProjectBrowser';
import ResumeViewer from './ResumeViewer';
import SignupPage from './SignupPage';
import UserDashboard from './UserDashboard';
import Nav from './Nav';
import SearchPage from './SearchPage';
import ProfileViewer from './ProfileViewer';
// import ProjectViewer from './ProjectViewer';

function App() {

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

  
  const [resumeData, setResumeData] = useState([])
  const [projectData, setProjectData] = useState([])
  const [userId, setUserId] = useState(0)

  useEffect(() => {
      fetch("/resumes")
        .then((res) => {
          if (res.ok) {
            res.json()
              .then((fetchedData) => setResumeData(fetchedData));
          }
        })
    }, [])

    console.log(resumeData)

    const updateUser = (user) => setCurrentUser(user)
  const [searchText, setSearchText] = useState('')
  console.log(searchText)

    const filteredUsers = resumeData.filter(resume =>
      resume.user.name.toLowerCase().includes(searchText.toLowerCase()))

      useEffect(() => {
        fetch("/projects")
          .then((res) => {
            if (res.ok) {
              res.json()
                .then((proObj) => setProjectData(proObj));
            }
          })
      }, [])

      const filteredProjects = projectData.filter(project => project.name.toLowerCase().includes(searchText.toLowerCase())
      ||
      project.collaborators.toLowerCase().includes(searchText.toLowerCase()))
    

  

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
        <Route path="/profiles" element={<ProfileBrowser resumeData={resumeData} />} />
        <Route path="/search" element={<SearchPage projects = {filteredProjects} users = {filteredUsers} searchResult = {searchText}/>} />
        <Route path="/user-page" element={<ProfileViewer/>} />
      </Routes>
      {/* } */}
    </div>
  );
}

export default App;
