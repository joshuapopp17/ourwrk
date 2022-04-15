import React, {useState, useEffect} from 'react'
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { db } from '../firebase';
import { Container, Button, Row, Col, Card } from 'react-bootstrap'
import { arrayUnion,  getDoc, doc, updateDoc} from "firebase/firestore";
import { getAuth } from 'firebase/auth';


function ExpandedScreen() {
  const [listing, setListing] = useState('')
  const [loading, setLoading] = useState(false)
  const [join, setJoin] = useState(false)

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.uid)

  const navigate = useNavigate();
  let { id } = useParams();

  const getListing = async () => {
    console.log("getting listing")
    setLoading(true)
    const docRef = doc(db, "jobs", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap) {
    } else {
      await setListing(docSnap.data())
    }
    if (listing?.attendingWorkers) {
      for (let x of listing.attendingWorkers) {
        console.log(x + "=" + user.uid)
        if (x == user.uid) {
          console.log("match")
          setJoin(true)
        }
      }
    }
    setLoading(false)
  }

  const joinListing = async () => {
    console.log("joining listing")
    const docRef = doc(db, "users", user.uid);
    const docRefHost = doc(db, "jobs", id);
    await updateDoc(docRef,{attending: arrayUnion(id)});
    await updateDoc(docRefHost,{attendingWorkers: arrayUnion(user.uid)});
    setJoin(true)
    getListing()
  }

  useEffect(() => {
    getListing()
  }, [])
  
  return (
      <Container style={{paddingTop: '70px', paddingBottom: '70px'}} className={'mt-5'}>
          <div className='d-flex mb-5'>
                <Button onClick={() => navigate("/listings")}>Back to Listings</Button>
              </div>
          <Row>
            <Col sm>
              <div className='ForumContainer'>
                <Card className="p-4">
                  <h1 className="fw-bold">{listing.title}</h1>
                  <h3  className='fw-light'>{listing.description}</h3>
                </Card>
                <Card className="p-4 mt-3">
                  <h1 className="fw-bold">Location</h1>
                  <h3  className='fw-light'>{listing.street} {listing.city} {listing.zip}</h3>
                </Card>
                <Card className="p-4 mt-3 mb-3">
                  <h1 className="fw-bold">Host</h1>
                  <h3 className='fw-light'>{listing.host}</h3>
                  <h3 className='fw-light'>Website: {"www.org.com"}</h3>
                </Card>
              </div>
            </Col>
            <Col sm>
              <Card className="ps-4 pb-4 pt-2">
                <Card.Text>
                  <h1 className="fw-bold">Hours:</h1>
                  <h1 className="fw-light">{listing.hours}</h1>
                </Card.Text>
                <Card.Text>
                  <h1 className="fw-bold">Available Slots:</h1>
                  <Row className="align-items-center">
                    <Col className='d-flex m-2'>
                      <div className='d-flex'>{listing.slots - listing.attendingWorkers?.length !== 0 ? <h1 className='fw-light'>{listing.slots - listing.attendingWorkers?.length}/{listing.slots}</h1> : <h1 className='fw-light'>FULL</h1>}</div>
                      <Button disabled={join} className='ms-5' onClick={() => joinListing()}>Join</Button>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </Card.Text>
              </Card>
            </Col>
          </Row>
      </Container>
  )
}

export default ExpandedScreen