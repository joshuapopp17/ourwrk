import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">OurWrk.net</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link className='text-dark'  href="#home">
            Create
        </Nav.Link>
        <Nav.Link className='text-dark'  href="#home">
            Profile
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar