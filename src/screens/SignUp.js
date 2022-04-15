import React, {useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState("")
    const [workType, setWorkType] = useState("")
    const {SignUp} = useUserAuth()
    const navigate = useNavigate()

    const handleSignup = async () => {
      console.log("logging")
      try {
        await SignUp(email, password)
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user.uid)
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, 
          {
            attending: [],
            type: "worker"
          });
        navigate("/")
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

                  <Form.Group className="mb-3" controlId="Title">
                    <Form.Label className="fs-3">Username</Form.Label>
                    <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="username" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Description">
                    <Form.Label className="fs-3 ">Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
                  </Form.Group>
                  
                  <div key={`default-${"radio"}`} className="mb-3">
                    <Form.Group className="mb-3" controlId="Description">
                      <Form.Check 
                        type={"radio"}
                        id={`Worker`}
                        name="group1"
                        label={`Worker`}
                        value={workType} onChange={e => setWorkType(e.target.value)}
                      />
                      <Form.Check
                        type={"radio"}
                        label={`Employer`}
                        name="group1"
                        id={`employer`}
                        value={workType} onChange={e => setWorkType(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                  <h1>{workType}</h1>
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