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
import UpdateUserInfo from './UpdateUserInfo';
import Nav from './Nav';
import SearchPage from './SearchPage';
import ViewerContainer from './ViewerContainer';
import ResumeGenerator from './ResumeGenerator';

function App() {

  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [projectId, setProjectId] = useState(0)
  const [currentResumeId, setCurrentResumeId] = useState(0)

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
  const [view, setView] = useState(false)

  useEffect(() => {
      fetch("/resumes")
        .then((res) => {
          if (res.ok) {
            res.json()
              .then((fetchedData) => setResumeData(fetchedData));
          }
        })
    }, [])

    const updateUser = (user) => setCurrentUser(user)
  const [searchText, setSearchText] = useState('')

    const filteredUsers = resumeData.filter(resume =>
      resume.user.name.toLowerCase().includes(searchText.toLowerCase())
      && resume.user.username.toLowerCase().includes(searchText.toLowerCase()))

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
    

      const [loneProject, setLoneProject] = useState({})

  

  if (errors) return <h1>{errors}</h1>
  return (
    <div className='App' style={{ backgroundImage: "url(/background-01.jpg)" }}>
      <Nav setSearchText={setSearchText} currentUser={currentUser} updateUser={updateUser} />
      {/* {currentUser ? <LoginPage error={'Please Login'} updateUser={updateUser} /> : */}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<LoginPage updateUser={updateUser} />} />
        <Route path="/signup" element={<SignupPage updateUser={updateUser} />} />
        <Route path="/update-profile" element={<UpdateUserInfo user={currentUser} updateUser={updateUser}/>} />
        <Route path="/dashboard" element={<UserDashboard user={currentUser} setResume={setCurrentResumeId}/>} />
        <Route path="/resume-generator" element={<ResumeGenerator user={currentUser} resume={currentResumeId} setResume={setCurrentResumeId} projectData={projectData}/>} />
        <Route path="/resume-view" element={<ResumeViewer user={currentUser} resume={currentResumeId} />} />
        <Route path="/projects" element={<ProjectBrowser />} />
        <Route path="/profiles" element={<ProfileBrowser resumeData={resumeData} searchResult={searchText} />} />
        <Route path="/search" element={<SearchPage projects = {filteredProjects} users = {filteredUsers} searchResult = {searchText}/>} />
        <Route path="/user-page" element={<ViewerContainer  view = {view} setView = {setView} projects = {projectData} user = {filteredUsers}/>} />
        <Route path="/project-view" element={<ProjectViewer projectId={projectId} />} />
      </Routes>
      {/* } */}
    </div>
  );
}

export default App;
