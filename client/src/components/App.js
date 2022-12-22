import '../css/App.css';
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
          </form>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/resume-view" element={<ResumeViewer />} />
        <Route path="/projects" element={<ProjectBrowser />} />
        <Route path="/profiles" element={<ProfileBrowser />} />
      </Routes>
    </div>
  );
}

export default App;
