import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // sign up
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign up
  //login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //login
  // logOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // logOut
  // forgetPassword
  const forget = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // forgetPassword
  // update profile
  const update = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // update profile
  // verifyEmail
  const verify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  // verifyEmail
  // googlelogin
  const googleProvider = new GoogleAuthProvider();
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // googlelogin
  // userObjarbar
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  // userObjarbar

  const authInfo = {
    user,
    mode,
    setMode,
    signUp,
    login,
    logout,
    forget,
    update,
    verify,
    google,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
