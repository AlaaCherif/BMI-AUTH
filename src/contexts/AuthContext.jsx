import { useContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signOut} from "firebase/auth"
import React from 'react'

const AuthContext = React.createContext()
export const auth = getAuth()
export function useAuth() {
       return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
       const [currentUser, setCurrentUser] = useState({})

       const signup = (email, password) => {
              const user = createUserWithEmailAndPassword(auth, email, password)
              setCurrentUser(user)
                     .then((response) => {
                            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                     })
       }
       const login = (email, password) => {
              const user = signInWithEmailAndPassword(auth, email, password)
              setCurrentUser(user)
              console.log(user)
       }
       const logout = () => {
              return signOut(auth)
       }
       onAuthStateChanged(auth, (user) => {
              setCurrentUser(user)
       })

       const value = {
              currentUser,
              setCurrentUser,
              signup,
              login,
              logout
       }
       return (
              <AuthContext.Provider value={value}>
                     {children}
              </AuthContext.Provider>
       )
}

