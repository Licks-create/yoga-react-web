/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Signup.css"
import classes from "../Hero/Hero.module.css"
import {Link} from "react-router-dom"
import LoginIcon from '@mui/icons-material/Login';
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';

const Signup = () => {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      onSignUp({ username, password });
      handlePostRequest();
    };

    const onSignUp=({ username, password })=>{
      if(username==="")return toast.error("Enter Valid username")
      if(password==="")return toast.error("Enter Valid Password")
      if(email==="")return toast.error("Enter Valid Password")
      const data=JSON.parse(localStorage.getItem("user"))

      if(data){
        const usernameMatched=data.find(x=>x?.username===username)
        console.log({usernameMatched})
        if(usernameMatched){
          toast.error("username already present")
          navigate("/login")
          return
       }
      else if(usernameMatched?.email===email){
        toast.error("email already present")
        navigate("/login")
        return
       }
       data.push({username,password,email})
       localStorage.setItem("user",JSON.stringify(data)) 
      }
      else{
        localStorage.setItem("user",JSON.stringify([{username,password,email}])) 
      }
      toast.success("registered")
      navigate("/login")
    }




    // backend

    const handlePostRequest = async() => {
      const resp= await fetch('http://localhost:3500/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,email,password}),
      })
      console.log(resp)
        // .then(response => response.json())
        // .then(data => {
        //   toast.success("Data Saved")
        //   console.log(data);
        // })
        // .catch(error => {
        //   toast.error("failed to save data to server")
        //   console.error('Error:', error);
        // });
    };

return (
    <div className='signup'>
      <Link to={'/'}>
      <h2 className={classes.logo} style={{left:"2%",top:"-40px"}}>Elda Health</h2>
      </Link>
      <h1>SIGN UP</h1>
      <form id='form' onSubmit={handleSubmit}>
        <section id='form-data' style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />

      <label>
        E-mail:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      </section>
      <button type="submit">Sign Up </button>
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-evenly",width:"60%",margin:".4rem auto"}}>
        <span>Already Have? </span>
      <button type="button" onClick={()=>{navigate("/login")}} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <span>
        Login
        </span>
      <LoginIcon style={{fontSize:"15px",marginLeft:"1rem"}}/>
      
      </button>
        </div>
    </form>

    </div>
  )
}

export default Signup
