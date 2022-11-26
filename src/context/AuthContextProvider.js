import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);
// google auth
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
    // user state
    const [user, setUser] = useState([]);
    // loading state
    const [loading, setLoading] = useState(true);

    // creating user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update user profile 
    const updateUser = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    // login with email password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //  login with google
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem("remart-token");
        return signOut(auth)
    }
    // reset password
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    // on auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            return () => {
                return unsubscribe();
            }
        })
    }, [])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUser,
        login,
        loginWithGoogle,
        logout,
        resetPassword
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;