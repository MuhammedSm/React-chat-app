import React from 'react'
import{signOut} from "firebase/auth"
import {auth} from '../firebase'
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Muhammed Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
        <span>Steve</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
