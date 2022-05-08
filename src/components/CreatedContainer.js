import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Listing from './Listing'
import { db } from '../firebase.js'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";

function CreatedContainer({category, jobs}) {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    setLoading(true)
    let temp = []
    console.log("getting hosted Jobs")
    console.log(jobs)
    const q = query(collection(db, "jobs"), where(documentId(), "in", jobs));
    console.log("1")
    const querySnapshot = await getDocs(q);
    console.log("2")
    querySnapshot.forEach((doc) => {
      console.log("DATA-----------------------------")
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
      temp.push(doc.data())
    });
    setListings(temp)
    console.log("3")
    if (listings) {
      setLoading(false)
    }
};

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container className="p-0 mb-5">
          <h1>{category}</h1>
          {listings.map((lisitng, index) => {
              return <Listing key={index} id={lisitng.id} title={lisitng.title} description={lisitng.description} hours={lisitng.hours}/>
          })}
    </Container>
  )
}

export default CreatedContainer