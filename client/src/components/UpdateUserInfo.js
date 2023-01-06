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
    const newUser = {
      name,
      username,
      email,
      password
    };
    fetch("/update_user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
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

  return (
    <div className="ProjectViewer">
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
        <input
          placeholder="Update username"
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        />
        <input
          placeholder="Update email"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <input
          placeholder="Update password"
          type="text"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UpdateUserInfo;
