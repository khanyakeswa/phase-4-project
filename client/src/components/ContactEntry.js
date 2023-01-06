import React from "react";

const ContactEntry = ({ contact }) => {
    return (
        <li className='saved-input'>
            <span>Link to: {contact.platform}</span>
            <br />
            <span>URL: {contact.url}</span>
        </li>
        )
}

export default ContactEntry;