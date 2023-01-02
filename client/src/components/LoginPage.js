import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ({updateUser}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const { username, password } = formData

    function submitHandler(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        navigate(`/users/${user.id}`)
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })
    }
    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const clickHandler = (e) =>{
        navigate('/signup')
    }

    return (
        <div>
            <h1>{location.pathname}</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Username
                </label>
                <input type='text' placeholder="Username" name='username' value={username} onChange={changeHandler} />
                <br /> <br />
                <label>
                    Password
                </label>
            
                <input type='password' placeholder="Password" name='password' value={password} onChange={changeHandler} />
                <br />

                <input type='submit' value='Log In' />
            </form>
            {errors ? <div>{errors}</div> : null}
            <br />
            <h3>or</h3>
            <br />
            <button onClick={clickHandler}>Signup with ResuME</button>
        </div>
    )
}

export default LoginPage;