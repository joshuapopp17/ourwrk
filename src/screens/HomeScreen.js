import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './HomeScreen.css'

function HomeScreen() {
  const navigate = useNavigate()
  return (
    <div className='bg'>
      <div className={'homeContainer'}>
        <Container className={'box'}>
          <h1 className={'title'}>Welcome to OurWrk</h1>
          <h3 className={'text'}>bringing communities togehter one hour at a time</h3>
          <Container className={'buttonContainer'}>
            <Button className={'button'} variant="primary" type="submit" onClick={() => navigate("/login")}>
                Log In
            </Button>
            <Button className={'button'} variant="outline-dark" type="submit" onClick={() => navigate("/signup")}>
                Don't have an account? Sign Up
            </Button>
          </Container>
        </Container>
      </div>
    </div>
  )
}

export default HomeScreen