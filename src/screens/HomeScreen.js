import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import ListingContainer from '../components/ListingContainer.js'
import MessageBox from '../components/MessageBox';

function HomeScreen() {
  return (
    <Container>
    <Row>
      <Col sm={8} >
        <ListingContainer category={"Gardening"}/>
      </Col>
      <Col sm={4}>
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </Col>
    </Row>
  </Container>
  )
}

export default HomeScreen