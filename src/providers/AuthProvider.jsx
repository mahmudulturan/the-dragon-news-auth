import {createContext, useState, useEffect} from 'react'
import {PropTypes} from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('object', currentUser);
        })
        return ()=> unsubscribe();
    },[])
    const authUser = {
        user,
        createUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;