import React, {useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';


const LoginScreen = () => {
    const {logIn} = useUserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async () => {
      console.log("logging")
      try {
        await logIn(email, password)
        navigate("/listings")
      } catch (error) {
        setError(error.message)
        console.log(error.message)
      }

    } 

  return (
      <Container style={{paddingTop: '70px', width: '40rem'}} className={'mt-5'}>
        <Form>
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label className="fs-3">Email</Form.Label>
                <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Description">
                <Form.Label className="fs-3 ">Password</Form.Label>
                <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
              </Form.Group>

              {error ?  <Alert variant='danger'>{error}</Alert>: <></>}

              <Button variant="primary" onClick={() => handleSignIn()}>
                Log in
              </Button>
              <Button style={{marginLeft: '20px'}} variant="outline-primary" onClick={() => navigate("/signup")}>
                  Don't have an account? Sign Up
              </Button>
        </Form>
      </Container>
  )
}

export default LoginScreen