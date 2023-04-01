import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import {FirebaseContext} from '../../context/firebase';

const Login = props => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    const authVerification = useContext(FirebaseContext);


    const loginCheck = (event) => {
        event.preventDefault();
        // add the code where we wait for the login success at firebase and redirect accordingly.
        if (event.nativeEvent.submitter.value === "Login") {
            authVerification.loginUser(username, password)
            .then((code) => {
                console.log("Logged in", code);
                navigate("/home");
            })
            .catch((error) => {
                console.log("Problem logging in", error);
                alert(error.message);
                setPassword('');
                setUsername('');
            });
        }
        else {
            authVerification.signUpUser(username, password)
            .then ((code) => {
                console.log("Signed up successfully", code);
            })
            .catch((error) => {
                console.log("Problem with signing up", error);
                alert(error.message);
                setPassword('');
                setUsername('');
            });
        }
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
                    <input type="submit" value="SignUp"></input>
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
