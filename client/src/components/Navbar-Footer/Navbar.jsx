import React from 'react'
import './Navbar.css'
import logo from '../Home/Images/logo.png'
import { useNavigate } from 'react-router-dom';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
const Navbar = () => {
    const navigate= useNavigate()
  return (
    <div className='navbar-con'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>

        <div className='route' onClick={()=>{navigate('/')}}>
            Home
        </div> 
        <div className='route'>
            About us
        </div>
        <div className='route'>
            Value my Home
        </div>
        <div className='route'>
            For Sale
        </div>
        <div className='route'>
            List my Property
        </div>
        <div className='route'>
            To-let
        </div>
        <div className='route'>
            My-Property
        </div>
        <div className='route'>
            Support
        </div>
        <div className='routesignin'>
            <PersonOutlineRoundedIcon/>
            Sign in
        </div>
    </div>
  )
}

export default Navbar