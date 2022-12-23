import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ({updateUser}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const { name, password } = formData

    function submitHandler(e) {
        e.preventDefault()
        const user = {
            name,
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
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
    }
    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div>
            <h1>{location.pathname}</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Username
                </label>
                <input type='text' name='name' value={name} onChange={changeHandler} />
                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={changeHandler} />
                <input type='submit' value='Log In' />
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default LoginPage;