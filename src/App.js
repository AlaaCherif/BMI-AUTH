import React from 'react'
import Home from './components/Home'
import { InfoProvider } from './contexts/Context'
import AuthProvider from './contexts/AuthContext'
import { Routes, Route } from 'react-router'
import Signup from './components/Signup'
import { BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'

export default function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <InfoProvider>
            <Navigation/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
          </InfoProvider>
        </AuthProvider>
      </BrowserRouter>

  )
}
