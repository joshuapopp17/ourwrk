import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import ListingContainer from '../components/ListingContainer.js'
import MessageBox from '../components/MessageBox';


function ListingsScreen() {
  return (
    <Container style={{paddingTop: '70px', paddingBottom: '70px'}} className={'mt-5'}>
    <Row>
      <Col sm={8} >
        <ListingContainer category={"Gardening"}/>
      </Col>
      <Col sm={4}>

      </Col>
    </Row>
  </Container>
  )
}

export default ListingsScreen