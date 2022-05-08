import React from 'react'
import './worker.css'
import { Card } from 'react-bootstrap'
import { FiCheck } from "react-icons/fi";
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Worker({worker, hours, jobId}) {

  const GiveHours = async () => {
    console.log("Giving Hours to " + worker.username)
    console.log(jobId)
    console.log(hours)
    console.log(worker.uid)
    console.log(worker.hoursWorkerd)
    const docRef = doc(db, "users", worker.uid);
    const jobRef = doc(db, "jobs", jobId);
    const newHours = parseInt(worker.hoursWorked) + parseInt(hours)
    await updateDoc(docRef,{hoursWorked: newHours});
    await updateDoc(docRef,{attending: arrayRemove(jobId)});
    await updateDoc(jobRef,{attendingWorkers: arrayRemove(worker.uid)});
  }

  return (
    <div class="MainContainer">
        <p class="WorkerName">{worker.username}</p>
        <FiCheck class="Icon" size={30} onClick={() => GiveHours()}/>
    </div>
  )
}

export default Worker