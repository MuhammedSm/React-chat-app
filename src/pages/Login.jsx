import React from 'react'
import Add from "../img/addAvatar.png" 
const Login=()=> {
  return (
    <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">Muhammed Chat</span>
        <span className="title">Register</span>
       <form>
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
