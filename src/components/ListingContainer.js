import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Listing from './Listing'
import { db } from '../firebase.js'
import { collection, getDocs } from "firebase/firestore"; 

function ListingContainer({category}) {
  const [listings, setListings] = useState([])

  const getListings = async () => {
    console.log("getting Listings")
    const querySnapshot = await getDocs(collection(db, "jobs"));
    const temp = []
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      let currentID = doc.id
      let appObj = { ...doc.data(), ['id']: currentID }
      temp.push(appObj)
    });
    setListings(temp)
  } 

  useEffect(() => {
    getListings()
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

export default ListingContainer