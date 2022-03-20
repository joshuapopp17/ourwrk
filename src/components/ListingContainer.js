import React from 'react'
import Listing from './Listing'

function ListingContainer({category}) {
  return (
      <div  style={{marginLeft: "30px"}} className='mt-3'>
          <h1>{category}</h1>
        <div className='d-flex gap-3' >
            <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
            <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
            <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
            <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
            <Listing title={"Garden Clean Up"} description="We need workers to water and trim the plants at the community garden." hours={2}/>
        </div>
      </div>
  )
}

export default ListingContainer