import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import {loginDetails} from '../../context/store-context';
import classes from './Login.module.css';
import FirebaseContext from '../../context/firebase';

const Login = props => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    // const loginInfo = useContext(loginDetails).details;
    const authVerification = useContext(FirebaseContext);

    const loginCheck = (event) => {
        event.preventDefault();
        console.log(authVerification);
        // authVerification(username, password);
        // if (username === loginInfo.username && password === loginInfo.password) {
        //     props.updateLoginStatus(true);
        //     setLoginStatus(true);
        //     navigate("/home");
        // }
        // else {
        //     setLoginStatus(false);
        //     setUsername('');
        //     setPassword('');
        // }

    }

    const renderForm = (
        <div className={classes.inputTag}>
            <form onSubmit={loginCheck}>
                <div className={classes.username}>
                    <label> Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </div>
                <div className={classes.password}>
                    <label> Password: </label>
                    <input 
                        type= "password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div className={classes.submitBtn}>
                    <input type="submit" value="Login"></input>
                </div>
            </form>
        </div>
    )

    return (
        <div>
            {loginStatus ? <NavLink to="/loggedIn>" /> : renderForm}
        </div>
    )
};

export default Login;
