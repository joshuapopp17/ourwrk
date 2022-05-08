import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ListingContainer from '../components/ListingContainer.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../screens/ProfileScreen.css'
import { getAuth } from 'firebase/auth';
import AttendingContainer from '../components/AttendingContainer.js';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

function WorkerProfile({user}) {
  return (
    <Container style={{ paddingTop: '70px'}}>
          <div className={'roundContainer1'}>
            <Row mb={1}>
                <Col xs={1}>
                  <div class="profile-header">
                    
                    <p class="border border-2" className={'textWrap'} md={{offset: 1}}>{user.username}</p>
                  </div>
                </Col>
            </Row>
          </div>
          
            <Row>
            <h1>Attending Jobs</h1>
              <Col className={'roundContainer2'}><AttendingContainer jobs={user.attending} /></Col>
              <Col className={'roundContainer3'} md={{span:4, offset: 1}}>
                <div>
                  <p className={'hoursTitle'}>Hours Completed</p>
                  <p className={'hoursAmount'}>{user.hoursWorked}</p>
                </div>
              </Col>
            </Row>
      </Container>
  )
}

export default WorkerProfile