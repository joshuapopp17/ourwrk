import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className='bg'>
      <div className={'homeContainer'}>
        <Container className={'box'}>
          <h1 className={'title'}>Welcome to OurWrk</h1>
          <h3 className={'text'}>bringing communities togehter one hour at a time</h3>
          <Container className={'buttonContainer'}>
            <Button className={'button'} variant="primary" type="submit" href={"/login"}>
                Log In
            </Button>
            <Button className={'button'} variant="outline-dark" type="submit" href={"/signup"}>
                Don't have an account? Sign Up
            </Button>
          </Container>
        </Container>
      </div>
    </div>
  )
}

export default HomeScreen