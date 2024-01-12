import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../signup/signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    title: '',
    fullname: '',
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file' && files.length > 0) {
      const reader = new FileReader();

      reader.onload = () => {
        setFormData({ ...formData, [name]: reader.result });
      };

      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSignup = async () => {
    try {
      const formDataObject = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataObject.append(key, value);
    });

    const response = await fetch('https://raddaf-be.onrender.com/auth/signup', {
      method: 'POST',
      body: formDataObject,
    });

    const data = await response.json();

      // const response = await fetch('https://raddaf-be.onrender.com/auth/signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        navigate('/login');
      } else {
        console.error('Signup failed:', data.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='total-div'>
      <h2>Register Account</h2>

      <form className="form-field">
        <TextField
          type="text"
          name="username"
          className="inputs"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <TextField
          type="email"
          name="email"
          className="inputs"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          type="password"
          name="password"
          className="inputs"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <TextField
          type="text"
          name="title"
          className="inputs"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <TextField
          type="text"
          name="fullname"
          className="inputs"
          placeholder="Fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />

        <input type='file' name="profileImage" onChange={handleInputChange} className="inputs" accept='image/*' />

        <center className='buttons12'>
          <Button sx={{ color: 'white', textTransform: 'lowercase' }} type="button" onClick={handleSignup}>
            Signup
          </Button>
        </center>
      </form>
    </div>
  );
};

export default Signup;
