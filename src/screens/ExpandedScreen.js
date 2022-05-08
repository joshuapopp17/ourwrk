import React, {useState, useEffect} from 'react'
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { db } from '../firebase';
import { Container, Button, Row, Col, Card } from 'react-bootstrap'
import { arrayUnion,  getDoc, doc, updateDoc, where, documentId, collection, getDocs, query} from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import Worker from '../components/Worker';
import WorkerList from '../components/WorkerList';


function ExpandedScreen() {
  const [listing, setListing] = useState('')
  const [loading, setLoading] = useState(false)
  const [join, setJoin] = useState(false)
  const [workers, setWorkers] = useState([])

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
      setListing(docSnap.data())
    }
  }

  const getWorkers = async () => {
    console.log("getting workers")
    setLoading(true)
    let temp = []
    const q = query(collection(db, "jobs"), where(documentId(), "in", listing.attendingWorkers));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log("DATA-----------------------------")
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
      temp.push(doc.data())
    });
    setWorkers(temp)
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

  const isJoined = () => {
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

  useEffect(() => {
    getListing()
  }, [])

  useEffect(() => {
    isJoined()
  }, [listing])

  useEffect(() => {
    if (user.uid !== listing.host) {
      getWorkers();
    }
  } , [join])
  
  return (
    <div>
      {!loading ? <Container style={{paddingTop: '70px', paddingBottom: '70px'}} className={'mt-5'}>
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
                {user.uid !== listing.host ? <Card className="p-4 mt-3 mb-3">
                  <h1 className="fw-bold">Host</h1>
                  <h3 className='fw-light'>{listing.host}</h3>
                  <h3 className='fw-light'>{listing.website ? listing.website : "no website"}</h3>
                </Card> 
                : 
                <Card className="ps-4 pb-4 pt-2 mt-3">
                  <Card.Text>
                    <h1>Attending Workers: </h1>
                    <WorkerList jobId={id} hours={listing.hours} workers={listing.attendingWorkers}/>
                  </Card.Text>
                </Card>}
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
      </Container> : <></>}
    </div>
  )
}

export default ExpandedScreen