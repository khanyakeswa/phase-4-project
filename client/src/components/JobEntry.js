import React from "react";

const JobEntry = ({ job }) => {
    return (
        <li className='saved-input'>
            <span> Company: {job.company}</span>
            <span>Position Title: {job.role}</span>
            <span>Location: {job.location}</span>
            <p>Job Description: {job.description}</p>
            <span>Start Date: {job.begin_date}</span>
            <span>Departure Date: {job.end_date}</span>
            {job.current.checked ?
                <span>Current Position</span>
                : null}
        </li>
        )
}

export default JobEntry;