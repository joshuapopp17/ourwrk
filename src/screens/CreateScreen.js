import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { db } from '../firebase.js'
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function CreateScreen() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('')

  const [hours, setHours] = useState()
  const [slots, setSlots] = useState()

  const createListing = async () => {
    console.log("creating")

    const jobsRef = doc(collection(db, "jobs"));

    let data = {
      title: title,
      description: description,
      street: street,
      city: city,
      zip: zip,
      hours: hours,
      slots: slots,
      attendingWorkers: [],
      time: time,
      date: date,
      host: user.uid,
      type: type,
    }

    await setDoc(jobsRef, data);
    navigate("/listings")
  }

  return (
      <Container style={{paddingTop: '70px',width: '40rem', paddingBottom: '70px'}} className={'mt-5'}>
        <h1>Create a new Listing</h1>
        <Form>
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label className="fs-3">Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Listing Title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Description">
                <Form.Label className="fs-3 ">Description</Form.Label>
                <Form.Control value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Street">
                <Form.Label className="fs-3 ">Street Adress</Form.Label>
                <Form.Control value={street} onChange={e => setStreet(e.target.value)} type="text" placeholder="Street Adress" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="City">
                <Form.Label className="fs-3 ">City</Form.Label>
                <Form.Control value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="City" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Zip">
                <Form.Label className="fs-3 ">Zip Code</Form.Label>
                <Form.Control value={zip} onChange={e => setZip(e.target.value)} type="text" placeholder="Zip Code" />
              </Form.Group>

              <div className="d-flex">
              <Form.Group className="mb-3 w-25 " controlId="Hours">
                <Form.Label className="fs-3 ">Date</Form.Label>
                <Form.Control value={date} onChange={e => setDate(e.target.value)} type="date" placeholder="Hours" />
              </Form.Group>

              <Form.Group className="mb-3  ms-3 w-25 " controlId="Hours">
                <Form.Label className="fs-3 ">Start Time</Form.Label>
                <Form.Control value={time} onChange={e => setTime(e.target.value)} type="time" placeholder="Hours" />
              </Form.Group>
              </div>

              <div className="d-flex">
                <Form.Group className="mb-3 w-25 " controlId="Hours">
                  <Form.Label className="fs-3 ">Available Slots</Form.Label>
                  <Form.Control value={slots} onChange={e => setSlots(e.target.value)} type="number" placeholder="Slots" />
                </Form.Group>

                <Form.Group className="mb-3 ms-3 w-25 " controlId="Hours">
                  <Form.Label className="fs-3 ">Hours</Form.Label>
                  <Form.Control value={hours} onChange={e => setHours(e.target.value)} type="number" placeholder="Hours" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3  w-25 " controlId="Selecr">
                <Form.Label className="fs-3 ">Type</Form.Label>
                <Form.Select value={type} onChange={e => setType(e.target.value)} aria-label="Default select example">
                  <option>Select type of work</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" onClick={() => createListing()}>
                Submit
              </Button>
        </Form>
      </Container>
  )
}

export default CreateScreen