import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export const FirebaseContext = createContext({
    loginUser: (username, password) => {},
    signUpUser: (username, password) => {}
});

export default FirebaseProvider => {

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

    const signUpNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then ((userCredential) => {
            console.log("Signed in");
        })
        .catch ((error) => {
            console.log(error);
        })
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signed in");
        })
        .catch ((error) => {
            console.log(error);
        })
    }

    return (
        <FirebaseContext.Provider 
        value = {{loginUser: signInUser, signUpUser: signUpNewUser}}
        >
            {FirebaseProvider.children}
        </FirebaseContext.Provider>
    );
}