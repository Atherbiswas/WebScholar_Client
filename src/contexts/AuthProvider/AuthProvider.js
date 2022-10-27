import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //signinWithPopup
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    } 
    
    //user resgister with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //user login with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //user update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    //user email verify
    const userEmailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    //user logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    //userEffect for user
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        providerLogin,
        createUser,
        updateUserProfile,
        userEmailVerify,
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