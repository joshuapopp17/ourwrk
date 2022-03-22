import React from 'react'
import { Container } from 'react-bootstrap'

function MessageBox() {
  return (
    <Container className={"border mt-4 mb-4"} >
        <h1>This is a message box</h1>
        <p>A message box will update users on stuff the website is doing</p>
    </Container>
  )
}

export default MessageBox