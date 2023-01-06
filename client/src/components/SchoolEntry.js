import React from "react";

const SchoolEntry = ({ school }) => {
    return (
        <li className='saved-input'>
            <span>School Name: {school.name}</span><br/>
            <span>Degree Earned: {school.degree}</span><br/>
            <span>Graduated: {school.graduation_date}</span><br/>
        </li>)
}

export default SchoolEntry;