import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ListingContainer from '../components/ListingContainer.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileScreen.css'
import { getAuth } from 'firebase/auth';
import AttendingContainer from '../components/AttendingContainer.js';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import WorkerProfile from '../components/WorkerProfile.js';
import OrganizationProfile from '../components/OrganizationProfile.js';

function ProfileScreen() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const auth = getAuth();
  const userRef = auth.currentUser;
  console.log(userRef?.email)

  const getUserInfo = async () => {
    setLoading(true)
    console.log("getting Listings")
    const docRef = doc(db, "users", userRef.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    setUser(docSnap.data())
    console.log("ATTENDING")
    console.log(user.attending)
    if (user) {
      setLoading(false)
    }
    console.log("Done")
  } 

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div>
      {!loading ? <div>
        {user.type === 'worker' ? <WorkerProfile user={user}/> : <OrganizationProfile user={user}/>}
      </div> : <></>}
    </div>
  )
}

export default ProfileScreen