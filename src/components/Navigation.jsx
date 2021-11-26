import React, { useEffect, useState } from 'react'
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'



export default function Navigation() {
       const [navItems, setNavItems] = useState("")
       const { currentUser, logout } = useAuth()
       console.log(currentUser)
       useEffect(() => {
              if (!currentUser) {
                     setNavItems(<>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign In</Nav.Link>
                     </>
                     )
              }
              else {
                     setNavItems(
                            <>
                                   <Nav.Link as={Link} to="/profile">Account</Nav.Link>
                                   <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
                            </>
                     )
              }
       },[currentUser])
       return (
              <Navbar className="flex-top" bg="light" expand="md">
                     <Container>
                            <Navbar.Brand href="/">BMI</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                   <Nav className="me-auto">
                                          <Nav.Link href="#home">Calculator</Nav.Link>
                                          {navItems}
                                   </Nav>
                            </Navbar.Collapse>
                     </Container>
              </Navbar>
       )
}
