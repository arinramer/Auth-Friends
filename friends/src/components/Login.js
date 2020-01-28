import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';

const Login = props => {
    const [credentials, setCredentials] = useState({});
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friendslist');
        })
    }
    const handleChange = e => {
        setCredentials( {
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={login}>
            <h1>Log in</h1>
            <input type="text" name="username" placeholder="username" onChange={handleChange} value={credentials.username}/>
            <br/>
            <input type="password" name="password" placeholder="password" onChange={handleChange} value={credentials.password}/>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Login;