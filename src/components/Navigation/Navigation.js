import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';


const Navigation = props => {
    return (
        <header className={classes.mainHeader}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/new">New Entry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/delete">Delete Entry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/edit">Edit Entry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Log out</NavLink>
                    </li>
                </ul>
            </nav>
        </header>            
    );
}

export default Navigation;