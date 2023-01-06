import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UpdateUserInfo({ user, updateUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
      new_name: '',
      new_username: '',
      new_email: '',
      new_password: '',
      confirm_password: ''
  })

  const [errors, setErrors] = useState([])
  const { name, username, email, password, confirm_password } = formData

  const handleSubmit = (e) => {
    // console.log("potato")
      e.preventDefault()
      const newUser = {
        name,
        username,
        email,
        password,
        confirm_password
      }
      if (password === confirm_password) {
      fetch('/update_user', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
      })
          .then(res => {
              if (res.ok) {
                  res.json().then(user => {
                      navigate(`/dashboard`)
                  })
              } else {
                  res.json().then(json => setErrors(Object.entries(json.errors)))
              }
          })
      } else setErrors(['Passwords must match!'])
  }
  const changeHandler = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
  }

 
  return (
    <div className="ProjectViewer">
      <h2>Personal Info</h2>
            <form onSubmit={handleSubmit}>
                <p></p>
                <input placeholder="Update name" type="text" name='new_name' value={name} onChange={changeHandler} />
                <input placeholder="Update username" type="text" name='new_username' value={username} onChange={changeHandler} />
                <input placeholder="Update email" type="text" name='new_email' value={email} onChange={changeHandler} />
                <input placeholder="Update password" type="text" name='new_password' value={password} onChange={changeHandler} />
                <input placeholder="Confirm Password" type="text" name='confirm_password' value={confirm_password} onChange={changeHandler} />
                <button type="submit">Save</button>
            </form>
    </div>
  );
}

export default UpdateUserInfo;
