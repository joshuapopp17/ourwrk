import React from 'react'
import { Button } from 'react-bootstrap';
import { FiLogOut,  FiPlusSquare } from "react-icons/fi";

function NavBar() {
  return (
    <div className="p-2 bg-primary d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content--center">
            <Button>
                <h1 className="text-light m-3">OurWrk.net</h1>
            </Button>
        </div>
        <div className="d-flex flex-row align-items-center">
            <Button style={{marginRight: "10px"}} className="p-2 bg-primary d-flex flex-row justify-content-center align-items-center">
                <FiPlusSquare style={{marginRight: "10px"}} className="text-light" size={50} color={'white'}/>
                <h2 className="text-light">Create</h2>
            </Button>

            <Button style={{marginRight: "10px"}} className="p-2 bg-primary d-flex flex-row justify-content-center align-items-center">
                <img src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60" style={{height: '50px', width: '50px', borderRadius: '5px', marginRight: "10px",objectFit: 'cover'}} alt="" />
                <div>
                    <h2 className="text-light">Username</h2>
                </div>
            </Button>

            <Button>
                <FiLogOut className="text-light m-3" size={50} color={'white'}/>
            </Button>
        </div>
    </div>
  )
}

export default NavBar