import React, { useContext } from 'react';
import classes from './UserProfile.module.css';
import { FirebaseContext } from '../../context/firebase';

const UserProfile = props => {
    const budget = useContext(FirebaseContext).monthlyBudget;

    return (
        <div className={classes.mainHeader}>
            <label> Monthly Budget: </label>
            <p>{budget}</p>
            
        </div>
    );
}

export default UserProfile;