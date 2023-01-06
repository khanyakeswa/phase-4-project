import React, { useState } from "react";

function ProfileCard({resume}) {
  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={resume.user_image}
          alt="profile picture"
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{resume.user.name}</div>
          <p className="card__text">{resume.experience}</p>
          <div className="card__detail">
            <p>
                {resume.title} | {resume.skills}
            </p>
          </div>
          <p>Online 🟢</p>
        </div>
      </div>
    </li>
  );
}

export default ProfileCard;
