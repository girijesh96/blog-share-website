//it is the login system of user and if there will be the login the logged users data will be saved in local storage

import "./login.css";
import {Link} from "react-router-dom"  //it includes the link and it will be helpful for switching the browser
import { useContext,useRef } from "react";  //it is used for saving the user data in local storage and keeping in mind that usr is in which state either logged in or not
import { Context } from "../../context/Context";
import { LoginSuccess } from "../../context/Actions";
import axios from "axios";  //it is used for fetching the data from the backend

export default function Login() {

  const userRef=useRef();  //it is used for taking the data of user
  const passwordRef=useRef();   //it is used for taking the data of password
  const {dispatch,isFetching}=useContext(Context);  //

  const handleSubmit=async(e)=>{    //it check the credentials of the user
    e.preventDefault();             //it prevent the default login system like it not submit without giving the input
    dispatch({type:"LOGIN_START"});   //it give the context message that login has been started
    try{
      const res=await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value,
      });
     // dispatch(LoginSuccess(res.data))
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})  //after login it gives the action to message that login has been sucess
    }
    catch(err)
    {
      dispatch({type:"LOGIN_FAILURE"})  //it gives the message to login failure
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput"
         type="text"
         placeholder="Enter your Username..."
         ref={userRef} />  {/* here useref store the username */}
        <label>Password</label>
        <input className="loginInput"
         type="password"
          placeholder="Enter your password..." 
          ref={passwordRef}/>   {/* here passwordRef store the password */}
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>  {/* after clicking the login if there will be the case of isFetching then login button will be hide */}
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  );
}