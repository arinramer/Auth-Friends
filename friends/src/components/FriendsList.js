import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';
import Form from './Form';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
    },[friends.length])
    const logout = e => {
        e.preventDefault();
        localStorage.clear()
        props.history.push('/')
    }
    return (
        <div>
            <button onClick={logout}>Log out</button>
            <h1>Friends:</h1>
            <Form length={friends.length} setFriends={setFriends}/>
            {friends.map(item => (
                <Friend key={item.id} person={item.name}/>
            ))}
            
        </div>
    )
}

export default FriendsList;