import React from 'react'
import { Container } from 'react-bootstrap'
import ListingContainer from '../components/ListingContainer.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileScreen.css'

function ProfileScreen() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user?.email)

  return (
      <Container style={{paddingTop: '130px'}}>
          <div className={'roundContainer1'}>
            <Row mb={1}>
                <Col xs={1}><img src="http://www.killersites.com/blog/wp-content/uploads/2012/04/icon-html.png" alt="..." class="img-fluid" style={{maxHeight: '100%'}}></img></Col>
                <Col class="border border-2" className={'textWrap'} md={{offset: 1}}>Username</Col>
            </Row>
          </div>
          
            <Row>
              <Col className={'roundContainer2'}><ListingContainer category={"Gardening"}/></Col>
              <Col className={'roundContainer3'} md={{span:4, offset: 1}}>Hours Planned: <br></br> 4 <br></br> <br></br>Hours Served: <br></br> 4</Col>
            </Row>
      </Container>
  )
}

export default ProfileScreen