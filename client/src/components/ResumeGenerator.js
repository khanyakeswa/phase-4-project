import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import SkillEntry from './SkillEntry';
import SchoolEntry from './SchoolEntry';
import JobEntry from './JobEntry';
import ContactEntry from './ContactEntry';

const ResumeGenerator = ({ user, resume, setResume }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const user_id = user.id
    const resume_id = resume.id

    const [formData, setFormData] = useState({
        title: '',
        about: '',
        skills: [],
        schools: [],
        jobs: [],
        contacts: []
    })

    // const resumeSubmitHandler = (e) => {
    //     e.preventDefault();
    //     // const newSkills = skills
    //     fetch('/submit_resume_skills', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({resume_id, skills})
    //     })
    // }
    const resumeSubmitHandler = (e) => {
        e.preventDefault();
        const newResume = { user_id, title, about }
        fetch('/submit_resume', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newResume)
        }).then((res) => {
            res.json().then(resume => {
                setResume(resume)
                console.log(resume)
            })
        }).then(fetch('submit_resume_skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({resume_id, skills})
        }))
    }

    const { title, about, skills, schools, jobs, contacts } = formData

    const [skillInputs, setSkillInputs] = useState({ name: "", score: "" })
    const [schoolInputs, setSchoolInputs] = useState({ name: "", degree: "", graduation_date: "" })
    const [jobInputs, setJobInputs] = useState({ company: "", role: "", location: "", description: "", begin_date: "", end_date: "", current: false })
    const [contactInputs, setContactInputs] = useState({ platform: "", url: "" })

    const addSkillHandler = () => {
        setFormData({ ...formData, skills: [...skills, skillInputs] })
        setSkillInputs({ name: "", score: ""})
    }
    const addSchoolHandler = () => {
        setFormData({ ...formData, schools: [...schools, schoolInputs] })
        setSchoolInputs({ name: "", degree: "", graduation_date: "" })
    }
    const addJobHandler = () => {
        setFormData({ ...formData, jobs: [...jobs, jobInputs] })
        setJobInputs({ company: "", role: "", location: "", description: "", begin_date: "", end_date: "", current: false })
    }
    const addContactHandler = () => {
        setFormData({ ...formData, contacts: [...contacts, contactInputs] })
        setContactInputs({ platform: "", url: "" })
    }

    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const skillInputHandler = (e) => {
        const { name, value } = e.target
        setSkillInputs({ ...skillInputs, [name]: value })
    }
    const schoolInputHandler = (e) => {
        const { name, value } = e.target
        setSchoolInputs({ ...schoolInputs, [name]: value })
    }
    const jobInputHandler = (e) => {
        const { name, value } = e.target
        setJobInputs({ ...jobInputs, [name]: value })
    }
    const jobToggleHandler = (e) => {
        setJobInputs({ ...jobInputs, current: e.target.checked })
    }
    const contactInputHandler = (e) => {
        const { name, value } = e.target
        setContactInputs({ ...contactInputs, [name]: value })
    }

    const savedSkills = skills.map(skill => (
        <SkillEntry skill={skill} />
    ))
    const savedSchools = schools.map(school => (
        <SchoolEntry school={school} />
    ))
    const savedJobs = jobs.map(job => (
        <JobEntry job={job} />
    ))
    const savedContacts = contacts.map(contact => (
        <ContactEntry contact={contact} />
    ))

    return (
        <div className="generator-container">
            <form id='resume-form' onSubmit={resumeSubmitHandler}>
                <input type="submit" value="Generate Résumé"></input>
                <h1>Resume Builder</h1>
                <div id='inputs-wrapper'>
                    <div className='inputs-container'>
                        <h2>Primary Details</h2>
                        <label htmlFor='title-input'>Résumé Title:</label>
                        <input onChange={changeHandler} type="text" className='formTextInput' id='title-input' name='title' value={title}  ></input><br />
                        <label htmlFor='about-input'>About You:</label><br />
                        <textarea onChange={changeHandler} className='formTextareaInput' id='about-input' name='about' value={about}  ></textarea><br />
                        <label>Headshot Photo:</label>
                        <input type="file" className='formFileInput' id='user-image-input' disabled></input>
                        <label>Personal Logo:</label>
                        <input type="file" className='formFileInput' id='user-logo-input' disabled></input>
                    </div>
                    <div className='inputs-container'>
                        <h2>Add Skill</h2>
                        <label htmlFor='skill-name-input'>Skill:</label>
                        <input onChange={skillInputHandler} type="text" className='formTextInput' id='skill-name-input' name="name" value={skillInputs.name}  ></input><br/>
                        <label htmlFor='skill-score-input'>Proficiency:</label>
                        <input onChange={skillInputHandler} type="number" className='formTextInput' id='skill-score-input' name="score" value={skillInputs.score}  ></input>
                        <div onClick={addSkillHandler} className='button-2'>
                            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path className="b" d="m35.28,22.58h-7.86v-7.86c0-1.34-1.08-2.42-2.42-2.42s-2.42,1.08-2.42,2.42v7.86h-7.86c-1.34,0-2.42,1.08-2.42,2.42s1.08,2.42,2.42,2.42h7.86v7.86c0,1.34,1.08,2.42,2.42,2.42s2.42-1.08,2.42-2.42v-7.86h7.86c1.34,0,2.42-1.08,2.42-2.42s-1.09-2.42-2.42-2.42Z" /><path className="b" d="m25,0C11.21,0,0,11.21,0,25s11.21,25,25,25,25-11.21,25-25S38.79,0,25,0Zm0,45.17c-11.12,0-20.17-9.04-20.17-20.17S13.88,4.83,25,4.83s20.17,9.05,20.17,20.17-9.05,20.17-20.17,20.17h0Z" /></svg>
                        </div>
                    </div>
                    <div className='inputs-container'>
                        <h2>Add Education</h2>
                        <label htmlFor='school-name-input'>School Name:</label>
                        <input onChange={schoolInputHandler} type="text" className='formTextInput' id='school-name-input' name="name" value={schoolInputs.name}  ></input><br />
                        <label htmlFor='school-degree-input'>Degree Earned:</label>
                        <input onChange={schoolInputHandler} type="text" className='formTextInput' id='school-degree-input' name="degree" value={schoolInputs.degree}  ></input><br />
                        <label htmlFor='school-graduation-input'>Graduation Date:</label>
                        <input onChange={schoolInputHandler} type="text" className='formTextInput' id='school-graduation-input' name="graduation_date" value={schoolInputs.graduation_date}  ></input>
                        <div onClick={addSchoolHandler} className='button-2'>
                            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path className="b" d="m35.28,22.58h-7.86v-7.86c0-1.34-1.08-2.42-2.42-2.42s-2.42,1.08-2.42,2.42v7.86h-7.86c-1.34,0-2.42,1.08-2.42,2.42s1.08,2.42,2.42,2.42h7.86v7.86c0,1.34,1.08,2.42,2.42,2.42s2.42-1.08,2.42-2.42v-7.86h7.86c1.34,0,2.42-1.08,2.42-2.42s-1.09-2.42-2.42-2.42Z" /><path className="b" d="m25,0C11.21,0,0,11.21,0,25s11.21,25,25,25,25-11.21,25-25S38.79,0,25,0Zm0,45.17c-11.12,0-20.17-9.04-20.17-20.17S13.88,4.83,25,4.83s20.17,9.05,20.17,20.17-9.05,20.17-20.17,20.17h0Z" /></svg>
                        </div>
                    </div>
                    <div className='inputs-container'>
                        <h2>Add Experience</h2>
                        <label htmlFor='job-company-input'>Company:</label>
                        <input onChange={jobInputHandler} type="text" className='formTextInput' id='job-company-input' name="company" value={jobInputs.company}  ></input><br />
                        <label htmlFor='job-role-input'>Position Held:</label>
                        <input onChange={jobInputHandler} type="text" className='formTextInput' id='job-role-input' name="role" value={jobInputs.role}  ></input><br />
                        <label htmlFor='job-location-input'>Location:</label>
                        <input onChange={jobInputHandler} type="text" className='formTextInput' id='job-location-input' name="location" value={jobInputs.location}  ></input><br />
                        <label htmlFor='job-description-input'>Position Description:</label><br />
                        <textarea onChange={jobInputHandler} className='formTextareaInput' id='job-description-input' name="description" value={jobInputs.description}  ></textarea><br />
                        <label htmlFor='job-begin-input'>Start Date:</label>
                        <input onChange={jobInputHandler} type="text" className='formTextInput' id='job-begin-input' name="begin_date" value={jobInputs.begin_date}  ></input><br />
                        <label htmlFor='job-end-input'>Departure Date:</label>
                        <input onChange={jobInputHandler} type="text" className='formTextInput' id='job-end-input' name="end_date" value={jobInputs.end_date}  ></input><br />
                        <label htmlFor='job-current-input'>Current Role:</label>
                        <input onChange={jobToggleHandler} type="checkbox" className='formCheckboxInput' id='job-current-input' name="current"  ></input><br />
                        <div onClick={addJobHandler} className='button-2'>
                            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path className="b" d="m35.28,22.58h-7.86v-7.86c0-1.34-1.08-2.42-2.42-2.42s-2.42,1.08-2.42,2.42v7.86h-7.86c-1.34,0-2.42,1.08-2.42,2.42s1.08,2.42,2.42,2.42h7.86v7.86c0,1.34,1.08,2.42,2.42,2.42s2.42-1.08,2.42-2.42v-7.86h7.86c1.34,0,2.42-1.08,2.42-2.42s-1.09-2.42-2.42-2.42Z" /><path className="b" d="m25,0C11.21,0,0,11.21,0,25s11.21,25,25,25,25-11.21,25-25S38.79,0,25,0Zm0,45.17c-11.12,0-20.17-9.04-20.17-20.17S13.88,4.83,25,4.83s20.17,9.05,20.17,20.17-9.05,20.17-20.17,20.17h0Z" /></svg>
                        </div>
                    </div>
                    <div className='inputs-container'>
                        <h2>Add Contact Address/Link</h2>
                        <label htmlFor='contact-platform-input'>Platform:</label>
                        <input onChange={contactInputHandler} type="text" className='formTextInput' id='contact-platform-input' name="platform" value={contactInputs.platform}  ></input><br />
                        <label htmlFor='contact-url-input'>Address/URL:</label>
                        <input onChange={contactInputHandler} type="text" className='formTextInput' id='contact-url-input' name="url" value={contactInputs.url}  ></input><br />
                        <div onClick={addContactHandler} className='button-2'>
                            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path className="b" d="m35.28,22.58h-7.86v-7.86c0-1.34-1.08-2.42-2.42-2.42s-2.42,1.08-2.42,2.42v7.86h-7.86c-1.34,0-2.42,1.08-2.42,2.42s1.08,2.42,2.42,2.42h7.86v7.86c0,1.34,1.08,2.42,2.42,2.42s2.42-1.08,2.42-2.42v-7.86h7.86c1.34,0,2.42-1.08,2.42-2.42s-1.09-2.42-2.42-2.42Z" /><path className="b" d="m25,0C11.21,0,0,11.21,0,25s11.21,25,25,25,25-11.21,25-25S38.79,0,25,0Zm0,45.17c-11.12,0-20.17-9.04-20.17-20.17S13.88,4.83,25,4.83s20.17,9.05,20.17,20.17-9.05,20.17-20.17,20.17h0Z" /></svg>
                        </div>
                    </div>
                </div>
            </form>
            <div id='resume-preview'>
                <h1>Resume Preview</h1>
                <div id='preview-inputs-wrapper'>
                    <h2>Header</h2>
                    <span>{title}</span>
                    <p>{about}</p>
                    <h2>Skills</h2>
                    {savedSkills.length > 0 ? null : <span>No Skills Added</span>}
                    <ul>
                        {savedSkills}
                    </ul>
                    <br />
                    <h2>Education</h2>
                    {savedSchools.length > 0 ? null : <span>No Education Added</span>}
                    <ul>
                        {savedSchools}
                    </ul>
                    <br />
                    <h2>Experience</h2>
                    {savedJobs.length > 0 ? null : <span>No Experience Added</span>}
                    <ul>
                        {savedJobs}
                    </ul>
                    <br />
                    <h2>Where to Find Me</h2>
                    {savedContacts.length > 0 ? null : <span>No Links Added</span>}
                    <ul>
                        {savedContacts}
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default ResumeGenerator