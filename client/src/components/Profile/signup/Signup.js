import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../signup/signup.css';
import Swal from 'sweetalert2';

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

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === 'file' && files.length > 0) {
      const file = files[0];
  
      if (file.size > 30000) {
        Swal.fire({
          icon: 'error', // Use 'error' icon for indicating an error
          title: 'File Size Too Large',
          text: 'Please select a file with size less than 30000 bytes.',
        });
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = () => {
        setFormData({ ...formData, [name]: reader.result });
      };
  
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSignup = async () => {
    try {
      setLoading(true);

      const formDataObject = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataObject.append(key, value);
      });

      const response = await fetch('https://raddaf-be.onrender.com/auth/signup', {
        method: 'POST',
        body: formDataObject,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'User signup has been successful',
        });
        navigate('/login');
      } else {
        console.error('Signup failed:', data.error);
        Swal.fire({
          icon: 'error',
          title: 'Signup failed!',
          text: 'User signup failed',
        });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      Swal.fire({
        icon: 'error',
        title: 'Signup failed!',
        text: 'User signup failed',
      });
    } finally {
      setLoading(false);
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
            {loading ? <CircularProgress size={20} sx={{color:"white"}}/> : 'Signup'}
          </Button>
         
        </center>
        <p onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Already have an Account ?</p>
      </form>
    </div>
  );
};

export default Signup;
