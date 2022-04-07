import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword, getAuth ,updateProfile } from 'firebase/auth';

const SignUp = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSignup = () => {
      console.log("logging")
      createUserWithEmailAndPassword(auth, email, password)
      .then(function(result) {
      }).catch(function(error) {
      console.log(error);
      });
      handleDisplayName()
    } 

    const handleDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: username, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            console.log("updated")
            console.log(auth.currentUser)
          }).catch((error) => {
            console.log(error)
          });
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

                  <Button variant="primary" onClick={() => handleSignup()}>
                    Sign Up
                  </Button>
                  <Button className="m-1" variant="outline-primary" href="/login">
                  Back to log in
              </Button>
            </Form>
        </Container>
    )
}

export default SignUp