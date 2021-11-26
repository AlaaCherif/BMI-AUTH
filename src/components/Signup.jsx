import React from 'react'
import { useRef,useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
       const {signup}=useAuth()
       const emailRef = useRef()
       const passwordRef = useRef()
       const confirmPasswordRef = useRef()
       const [loading, setLoading] = useState(false)
       const [error, setError] = useState("")
       const nav=useNavigate()
       async function handleSubmit(e)  {
              e.preventDefault()
              setLoading(true)
              if(passwordRef.current.value!==confirmPasswordRef.current.value)
              return alert("Passwords don't match !")&setLoading(false)
              else if(passwordRef.current.value.length<6)
              return alert('Password is too short !')&setLoading(false)
              try{
                     setError("")
                     await signup(emailRef.current.value,passwordRef.current.value)
                     console.log("successfully logged in");
                     setLoading(false)
                     nav("/profile")
              }
              catch(error){
                     setError("error creating account",error)
                     setLoading(false)
                     console.log(error)
              }

       }
       return (
              <div className="personal-container">
                     <h1 style={{ marginBottom: "1em" }}>Sign up</h1>
                     {error && <div>{error}</div>}
                     <form onSubmit={handleSubmit} className="form-container-2">
                            <label className="label-flex">
                                   Email:
                                   <input className="input-text" type="email" placeholder="Type a valid email adress" ref={emailRef} />
                            </label>
                            <label className="label-flex">
                                   Password:
                                   <input type="password" placeholder="Provide a password" ref={passwordRef} className="input-text" />
                            </label>
                            <label className="label-flex">
                                   Confirm password:
                                   <input type="password" className="input-text" placeholder="Retype the password" ref={confirmPasswordRef} />
                            </label>
                            <div className="auth-button">
                                   <input type="submit" className="input-button" disabled={loading} />
                            </div>
                     </form>
              </div>
       )
}
