import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/friendslist" component={FriendsList}/>
    </div>
  );
}

export default App;
