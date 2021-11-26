import React from 'react'
import { useRef,useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
       const {login,setCurrentUser}=useAuth()
       const emailRef = useRef()
       const passwordRef = useRef()
       const [loading, setLoading] = useState(false)
       const [error, setError] = useState("")
       const nav=useNavigate()
       async function handleSubmit(e)  {
              e.preventDefault()
              setLoading(true)
              try{
                     setError("")
                     const user=await login(emailRef.current.value,passwordRef.current.value)
                     setCurrentUser(user)
                     setLoading(false)
                     nav("/profile")

              }
              catch(error){
                     setError("error logging in",error)
                     setLoading(false)
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
                            <div className="auth-button" style={{width:"40%"}}>
                                   <input type="submit" className="input-button" disabled={loading} />
                            </div>
                     </form>
              </div>
       )
}
