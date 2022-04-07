import React from 'react'
import { Container } from 'react-bootstrap'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className='bg'>
      <div className={'homeContainer'} style={{paddingTop: '70px'}}>
        <Container className={'box'}>
          <h1>OurWrk</h1>
          <h3>bringing communities togehter one hour at a time</h3>
        </Container>
      </div>
    </div>
  )
}

export default HomeScreen