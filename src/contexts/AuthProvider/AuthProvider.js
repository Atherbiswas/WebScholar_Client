import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //signinWithPopup
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    } 

    //user logout
    const logout = () => {
        return signOut(auth);
    }
    
    //user resgister with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //user login with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //userEffect for user
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        providerLogin,
        createUser,
        logout,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;