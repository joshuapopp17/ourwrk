import React, { useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { UserContext } from '../App';

function NavBar() {
  return (
    <Navbar className="fixed-top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand className="fs-2" href="/">OurWrk</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link className="fs-5" href="/listings">Listings</Nav.Link>
      <Nav.Link className="fs-5" href="/create">Create</Nav.Link>
      <Nav.Link className="fs-5" href="/profile">Profile</Nav.Link>
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link className="fs-5" href="/login">Sign In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar