import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../contexts/AuthContext'

export default function Profile() {
       const { currentUser,logout } = useAuth()
       let navigate = useNavigate()
       const [loading, setLoading] = useState(true)
       
       return (
              <div className="personal-container">
                     { currentUser.email}
              </div>
       )
}
