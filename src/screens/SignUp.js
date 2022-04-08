import React, {useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { createUserWithEmailAndPassword, getAuth ,updateProfile } from 'firebase/auth';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState("")
    const {SignUp} = useUserAuth()
    const navigate = useNavigate()

    const handleSignup = async () => {
      console.log("logging")
      try {
        await SignUp(email, password)
        navigate("/")
      } catch (error) {
        setError(error.message)
        console.log(error.message)
      }

    } 


    return (
        <Container style={{paddingTop: '70px'}} className={'mt-5'}>
            <Form>
                  <Form.Group className="mb-3" controlId="Title">
                    <Form.Label className="fs-3">Email</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Title">
                    <Form.Label className="fs-3">Username</Form.Label>
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="username" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Description">
                    <Form.Label className="fs-3 ">Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
                  </Form.Group>
                  
                  {error ?  <Alert variant='danger'>{error}</Alert>: <></>}

                  <Button variant="primary" onClick={() => handleSignup()}>
                    Sign Up
                  </Button>
                  <Button style={{marginLeft: '20px'}} variant="outline-primary" onClick={() => navigate("/login")}>
                  Have an account? Log in
              </Button>
            </Form>
        </Container>
    )
}

export default SignUpScreen