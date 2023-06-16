import React, { useState } from 'react'
import Add from "../img/addAvatar.png" 
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage,db} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const Login=()=> {
  const [err,setErr]=useState(false);
  const navigate=useNavigate()
  const handleSubmit =async(e)=>{
      e.preventDefault();
      const email=e.target[0].value;
      const password = e.target[1].value;
     

      try{
      }catch(err){
        setErr(true)
      }

  };
  return (
    <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">Muhammed Chat</span>
        <span className="title">Register</span>
       <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input style={{display:"none"}} type="file" id="file"/>
            
            <button>Sign in</button>
       </form>
       <p>Don't have an account? Register</p>
    </div>
    
  </div>
  );
};
export default Login;
