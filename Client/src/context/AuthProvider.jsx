import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // Stats 
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => { 
            setUser(currentUser);
            setLoader(false);
        }); 
        return ()=> unsubscribe();
    },[])

    const contextValue = {googleLogin}
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;