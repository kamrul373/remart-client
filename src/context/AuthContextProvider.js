import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

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
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    // login with email password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //  login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //logout
    const logout = () => {
        localStorage.removeItem("remart-token");
        return signOut(auth)
    }
    // on auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUser,
        login,
        loginWithGoogle,
        logout
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