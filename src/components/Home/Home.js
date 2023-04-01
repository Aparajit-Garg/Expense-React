import React, {useState} from 'react';
// import classes from './Home.module.css';
import Navigation from '../Navigation/Navigation';
import UserProfile from '../UserProfile/UserProfile';

const Home = props => {


    return (
        <React.Fragment>
            <Navigation />
            <UserProfile />
        </React.Fragment>
    );
}

export default Home;