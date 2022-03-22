import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="fixed-top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar