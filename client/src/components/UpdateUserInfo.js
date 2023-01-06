import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UpdateUserInfo({ user, updateUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
console.log(formData)
  const [errors, setErrors] = useState([]);
  const { name, username, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUpdateUserInfo = {
      name,
      username,
      email,
      password
    };
    fetch("/update_user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUpdateUserInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          navigate(`/dashboard`);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  };
  console.log(errors)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDeteAccount = (e) => {
    if (window.confirm("Are you sure you want to delete your account? This is permanent") == true) {
      fetch("destroy-user", {
          method: 'DELETE'
      })
      navigate("/login");
      window.location.reload(false);
    }
  }

  return (
    <div id="update-user-container">
      <h2>Personal Info</h2>
      <form onSubmit={handleSubmit}>
        <p></p>
        <input 
          placeholder="Update name"
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
        />
        <br></br>
        <input className="input-field"
          placeholder="Update username"
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        />
                <br></br>

        <input className="input-field"
          placeholder="Update email"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
        />
                <br></br>

        <input className="input-field"
          placeholder="Update password"
          type="text"
          name="password"
          value={password}
          onChange={changeHandler}
        />
                <br></br>

        <button className="input-field" type="submit">Save</button>
        <br></br>
        <h2>or</h2>
        <br></br>
      </form>
      <button onClick={handleDeteAccount} className="input-field" type="submit">Delete account</button>
    </div>
  );
}

export default UpdateUserInfo;
