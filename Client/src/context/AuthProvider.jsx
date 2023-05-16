import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // Stats 
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => unsubscribe();
    }, [])

    const contextValue = { googleLogin, user, loader, setUser , githubLogin }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;