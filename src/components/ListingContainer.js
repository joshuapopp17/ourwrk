import React from 'react'
import { Container } from 'react-bootstrap'
import Listing from './Listing'

function ListingContainer({category}) {
  return (
    <Container className="p-0 mb-5">
          <h1>{category}</h1>
          <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden. " hours={2}/>
          <Listing title={"Tree Planting"} description="Help plant some new trees." hours={3}/>
          <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden. " hours={2}/>
          <Listing title={"Tree Planting"} description="Help plant some new trees." hours={3}/>
          <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden. " hours={2}/>
          <Listing title={"Tree Planting"} description="Help plant some new trees." hours={3}/>

          <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden. " hours={2}/>
          <Listing title={"Tree Planting"} description="Help plant some new trees." hours={3}/>
    </Container>
  )
}

export default ListingContainer