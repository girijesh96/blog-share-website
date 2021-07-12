//this is the user registration page in which user can register for the writing of posts
//there is include of axios which is helpful for writing the data into backend and getting the data from backend

import "./register.css"
import {Link} from 'react-router-dom'
import { useState } from "react"
import axios from "axios" //inclusion of axios

export default function Register() {
    const [username,setUsername]=useState("") //this is for taking the username 
    const [email,setEmail]=useState("")       //this is for taking the email
    const [password,setPassword]=useState("") //this is for taking the password
    const[error,setError]=useState(false);    //this is for giving the error at the time when there will be already a user with the same name 

    const handleSubmit=async(e)=>{  //after submit it check that user registration is valid or not if it will be valid it will register otherwise it will throw an error
      e.preventDefault();
      try{
        const res=await axios.post("auth/register",{  //it register to databse of username,email,password
          username,
          email,
          password,
        })
        res.data&&window.location.replace("/login");  //after login it transfer to the login system
      }
      catch(err){
        setError(true)
      }
    }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."
        onChange={e=>setUsername(e.target.value)}  //it take the username
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..."
        onChange={e=>setEmail(e.target.value)}  //ittake the email
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."
        onChange={e=>setPassword(e.target.value)}  //it take the password
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
        {error&&<span style={{color:"red",marginTop:"10px"}}>Something went wrong</span>} {/*it shows the error if anything wrong with registration */}
    </div>
    )
}