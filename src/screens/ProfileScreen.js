import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import { UserContext } from '../App';

function ProfileScreen() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user?.email)

  return (
      <Container style={{paddingTop: '70px'}} className={'mt-5'}>
            <div>ProfileScreen</div>
            <h1>{user?.email}</h1>
            <h1>{user?.uid}</h1>
      </Container>
  )
}

export default ProfileScreen