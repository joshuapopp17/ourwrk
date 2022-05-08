import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { db } from '../firebase.js';
import { useUserAuth } from '../context/UserAuthContext';

function NavBar() {
  const [userInfo, setUserInfo] = useState({})
  const {logOut} = useUserAuth()
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user?.email)

  const getUserInfo = async () => {
    console.log("getting Listings")
    console.log(user.uid)
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    setUserInfo(docSnap.data())
    console.log(userInfo.type)
    console.log("Done")
  } 

  useEffect(() => {
    getUserInfo()
  }, [])

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
      {userInfo ? <Nav.Link className="fs-5" as={Link} onClick={() => logOut()} to="/login">Sign Out</Nav.Link> 
      : <Nav.Link className="fs-5" as={Link} to="/login">Log In</Nav.Link>}
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar