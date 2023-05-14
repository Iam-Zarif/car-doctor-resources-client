/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
     
    const createUser = (email,password) =>{
   setLoading(true);     
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>{
const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    console.log("current user", currentUser)
    setLoading(false)
});

return () =>{
    return unsubscribe;
}
    },[])
    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
      user,
      loading,
      createUser,
      login,
      logOut,
    };
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;