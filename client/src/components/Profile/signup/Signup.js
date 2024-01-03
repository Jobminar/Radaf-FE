import React, { useState } from 'react';
import { Avatar, TextField, Button } from '@mui/material';
import chandra from '../profile/chandra.jpg';
import '../signup/signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    title: '',
    language: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('https://raddaf-be.onrender.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        
        console.log('Signup successful:', data);
      } else {
      
        console.error('Signup failed:', data.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <center>
        <Avatar alt="Remy Sharp" src={chandra} sx={{ width: '9%', height: '115px' }} />
        <h2>Account</h2>
      </center>
      <div className="form-out">
        <form className="form">
          <TextField
            // label="Username"
            type="text"
            name="username"
            className="inputs"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <TextField
            // label="Email"
            type="email"
            name="email"
            className="inputs"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            // label="Password"
            type="password"
            name="password"
            className="inputs"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <TextField
            // label="Title"
            type="text"
            name="title"
            className="inputs"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextField
            // label="Fullname"
            type="text"
            name="fullname"
            className="inputs"
            placeholder="Fullname"
            value={formData.title}
            onChange={handleInputChange}
          />
          <Button variant='contained' className='buttons12' type="button" onClick={handleSignup}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
