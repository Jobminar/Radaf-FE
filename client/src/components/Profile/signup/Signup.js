import React from 'react'
import '../signup/signup.css'
import { Avatar } from '@mui/material'
import chandra from '../chandra.jpg'
const Signup = ({children}) => {
  return (
    <div>
{children}

 <center><Avatar alt="Remy Sharp" src={chandra} sx={{width:"9%", height:"120px"}}/><h2>Account</h2></center>
<div className='form-out'>
      <form className='form'>
      <span> <label for="username">Username : </label>< input className='inputs' type="text"  name="Username" placeholder='Username'/></span>
      <span> <label for="username">Email : </label> < input className='inputs' type="email"  name="Email" placeholder='Email'/></span>
      <span> <label for="password">password : </label> < input className='inputs' type="text"  name="password" placeholder='******'/></span>
      <span><label for="Title">Title : </label>  < input className='inputs' type="text"  name="Title" placeholder='Title'/></span>
      <span>  <label for="Title">Language : </label>< input className='inputs' type="text"  name="English" placeholder='English'/></span>
     <span> <button className='buttons1'>Save</button></span>
      </form>
      </div>
      
    </div>
  )
}

export default Signup
