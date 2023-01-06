import React from "react";

const SkillEntry = ({ skill }) => {
    return (
        <li className='saved-input'>
                <p>{skill.name}</p>
        </li>
    )
}

export default SkillEntry;