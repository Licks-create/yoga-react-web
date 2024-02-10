/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Recovery.css";
import toast from "react-hot-toast";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "../Hero/Hero.module.css"
import {Link} from "react-router-dom"
import LoginIcon from '@mui/icons-material/Login';
import {useNavigate} from "react-router-dom"


const Recovery = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      getPassword({ username, email });
    };

    const getPassword=({ username, email })=>{
      if(username==="")return toast.error("Enter Valid username")
      if(email==="")return toast.error("Enter Valid Password")
      const data=JSON.parse(localStorage.getItem("user"))
      if(data){
        const usernameMatched=data.find(x=>x.username===username&&x.email===email)
        if(usernameMatched){
          toast.success(`password is ${usernameMatched.password}`)
          navigate("/login")
          return
       }
       else
       {
          toast.error("User doesn't exist")
          return
       }
      }
    }

return (
    <div className='signup'>
        <Link to={'/'}>
      <h2 className={classes.logo} style={{left:"2%",top:"-40px"}}>Elda Health</h2>
      </Link>
      <h1>RECOVER PASSWORD</h1>
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
      
      </section>
      <button type="submit">GET PASSWORD </button>
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

export default Recovery


