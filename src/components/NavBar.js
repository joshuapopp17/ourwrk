import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="fixed-top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand className="fs-2" href="#home">OurWrk</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link className="fs-5" href="/">Home</Nav.Link>
      <Nav.Link className="fs-5" href="/create">Create</Nav.Link>
      <Nav.Link className="fs-5" href="/profile">Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar