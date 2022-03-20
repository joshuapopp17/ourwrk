import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Listing from './Listing'

function ListingContainer({category}) {
  return (
    <Container fluid="md" className="mt-5">
          <h1>{category}</h1>
            <Row>
              <Col sm={4}>
                <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
              </Col>
              <Col sm={4}>
                <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
              </Col>
              <Col sm={4}>
                <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
              </Col>
              <Col sm={4}>
                <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
              </Col>
            </Row>
    </Container>
  )
}

export default ListingContainer