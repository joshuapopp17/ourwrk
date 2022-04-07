import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log("logging")
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("looged in");
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
      <Container style={{paddingTop: '70px'}} className={'mt-5'}>
        <Form>
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label className="fs-3">Email</Form.Label>
                <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Description">
                <Form.Label className="fs-3 ">Password</Form.Label>
                <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
              </Form.Group>

              <Button variant="primary" onClick={() => handleLogin()}>
                Sign in
              </Button>
              <Button className="m-1" variant="outline-primary" href="/signup">
                  Don't have an account? Sign Up
              </Button>
        </Form>
      </Container>
  )
}

export default LoginScreen