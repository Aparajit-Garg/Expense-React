import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export const FirebaseContext = createContext({
    monthlyBudget : null,
    loginUser: (username, password) => {},
    signUpUser: (username, password) => {}
});

export default props => {

    const firebaseConfig = {
        apiKey: "AIzaSyD9xX6tXH9PsDHTXcpghv5ZRBzOVBmnS0U",
        authDomain: "expensetracker-f771b.firebaseapp.com",
        projectId: "expensetracker-f771b",
        storageBucket: "expensetracker-f771b.appspot.com",
        messagingSenderId: "710437769548",
        appId: "1:710437769548:web:a7779a265ef608e7c9bfe9"
    };

    const firebaseApp = initializeApp(firebaseConfig);

    const auth = getAuth(firebaseApp);

    const signUpNewUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        // try {
        //     const response = await createUserWithEmailAndPassword(auth, email, password);
        //     const token = await response.user.getIdToken();
        //     console.log("This is the token: ", token);
        //     return true;
        // } catch (error) {
        //     console.log("ERROR: ", error);
        //     return false;
        // }
    }

    const signInUser = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        // try {
        //     const response = await signInWithEmailAndPassword(auth, email, password);
        //     const token = await response.user.getIdToken();
        //     console.log("Response: ", response);
        //     console.log("Token for signin: ", token);
        //     return true;
        // } catch (error) {
        //     alert(error.message);
        //     console.log("ERROR: ", error);
        //     return false;
        // }
        
    }

    return (
        <FirebaseContext.Provider 
            value={{ monthlyBudget: 10000, loginUser: signInUser, signUpUser: signUpNewUser}}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
}