import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';

const Form = props => {
    const [user, setUser] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        setUser( {
            ...user,
            id: props.length + 1
        })
        axiosWithAuth().post('/friends', user)
        .then(res => {
            props.setFriends(res.data);
            setUser({
                name: '',
                age: '',
                email: ''
            })
        })
    }
    const handleChange = e => {
        setUser( {
            ...user,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new friend</h2>
            <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange}></input>
            <input type="text" name="age" placeholder="Age" value={user.age} onChange={handleChange}></input>
            <input type="text" name="email" placeholder="Email" value={user.email} onChange={handleChange}></input>
            <button>Submit</button>
        </form>
    )
}

export default Form;