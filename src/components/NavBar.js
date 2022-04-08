import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

function NavBar() {
  const {logOut} = useUserAuth()
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user?.email)

  return (
    <Navbar className="fixed-top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand className="fs-2" as={Link} to="/">OurWrk</Navbar.Brand>
    {user ? <Nav className="me-auto">
      <Nav.Link className="fs-5" as={Link} to="/listings">Listings</Nav.Link>
      <Nav.Link className="fs-5" as={Link} to="/create">Create</Nav.Link>
      <Nav.Link className="fs-5" as={Link} to="/profile">Profile</Nav.Link>
    </Nav> : <></>}
    <Nav className="mr-auto">
      {user ? <Nav.Link className="fs-5" as={Link} onClick={() => logOut()} to="/login">Sign Out</Nav.Link> : <Nav.Link className="fs-5" as={Link} to="/login">Sign In</Nav.Link>}
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar