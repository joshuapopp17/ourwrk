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
    const [website, setWebsite] = useState("")
    const {SignUp} = useUserAuth()
    const navigate = useNavigate()

    const handleSignup = async () => {
      console.log("logging")
      try {
        await SignUp(email, password)
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user.uid)
        console.log(workType)
        const docRef = doc(db, "users", user.uid);
        if (workType === "worker") {
          await setDoc(docRef, 
            {
              attending: [],
              type: "worker",
              username: username,
              hoursWorked: 0
            });
        } else if (workType === "employer"){
          if (website === "") {
            setError("Please add a website link")
            return 400
          }
          await setDoc(docRef, 
            {
              attending: [],
              type: "employer",
              username: username,
              hoursWorked: 0,
              website: website
            });
        }
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
                        checked={workType === 'worker'}
                        label={`worker`}
                        value={"worker"} onChange={() => setWorkType('worker')}
                      />
                      <Form.Check
                        type={"radio"}
                        label={`Employer`}
                        name="group1"
                        checked={workType === 'employer'}
                        value={"employer"} onChange={() => setWorkType('employer')}
                      />
                    </Form.Group>
                    {workType === 'employer' ? 
                                    <Form.Group className="mb-3" controlId="Website">
                                      <Form.Label className="fs-3 ">Website</Form.Label>
                                      <Form.Control value={website} onChange={e => setWebsite(e.target.value)} type="text" placeholder="password" />
                                    </Form.Group>
                                    :
                                    <></>
                    }
                  </div>
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