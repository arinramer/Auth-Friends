import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to friends list!</h1>
            <Link to="/login"><button>Log in</button></Link>
        </div>
    )
}

export default Home;