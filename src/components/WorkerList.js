import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Listing from './Listing'
import { db } from '../firebase.js'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import Worker from './Worker';

function WorkerList({category, hours, workers, jobId}) {
  const [workerList, setWorkerList] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    setLoading(true)
    let temp = []
    console.log("getting attending Jobs")
    console.log(workers)
    const q = query(collection(db, "users"), where(documentId(), "in", workers));
    console.log("1")
    const querySnapshot = await getDocs(q);
    console.log("2")
    querySnapshot.forEach((doc) => {
      console.log("DATA-----------------------------")
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id);
      temp.push({...doc.data(), uid: doc.id})
    });
    setWorkerList(temp)
    console.log("3")
    if (workerList) {
      setLoading(false)
    }
};

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container className="p-0 mb-5">
          <h1>{category}</h1>
          {workerList.map((worker, index) => {
              return <Worker key={index} hours={hours} jobId={jobId} worker={worker}/>
          })}
    </Container>
  )
}

export default WorkerList