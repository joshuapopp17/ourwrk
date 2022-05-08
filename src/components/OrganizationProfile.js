import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../screens/ProfileScreen.css'
import CreatedContainer from './CreatedContainer.js';

function OrganizationProfile({user}) {
  return (
    <Container style={{ paddingTop: '70px'}}>
          <div className={'roundContainer1'}>
            <Row mb={1}>
                <Col xs={1}>
                  <div class="profile-header">
                    <h1 class="border border-2" className={'textWrap'} md={{offset: 1}}>{user.username}</h1>
                  </div>
                </Col>
            </Row>
          </div>
          
            <Row>
              <h1>You're Events</h1>
              <Col className={'roundContainer2'}><CreatedContainer jobs={user.hostedJobs} /></Col>
            </Row>
      </Container>
  )
}

export default OrganizationProfile