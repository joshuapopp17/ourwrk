import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Listing({title, description, hours}) {
  return (
    <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text style={{marginBottom: '20px'}} className='h4'>
            {hours} Hours
          </Card.Text>
          <Button variant="primary">View Listing</Button>
        </Card.Body>
    </Card>
  )
}

export default Listing