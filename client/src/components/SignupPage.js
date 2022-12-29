import { React, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SignupPage = ({ updateUser }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const [errors, setErrors] = useState([])
    const { name, username, email, password, confirm_password } = formData

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            username,
            email,
            password,
            confirm_password
        }
        if (password === confirm_password) {
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        navigate(`/users/${user.id}`)
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
        <div>
            <h1>{location.pathname}</h1>
            <h2>Create your ResuME! Account</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" type="text" name='name' value={name} onChange={changeHandler} />
                <input placeholder="Username" type="text" name='username' value={username} onChange={changeHandler} />
                <input placeholder="Email" type="text" name='email' value={email} onChange={changeHandler} />
                <input placeholder="Password" type="text" name='password' value={password} onChange={changeHandler} />
                <input placeholder="Confirm Password" type="text" name='confirm_password' value={confirm_password} onChange={changeHandler} />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default SignupPage;