import React, { useState } from 'react';
import { Avatar, TextField, Button } from '@mui/material';
import '../signup/signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    title: '',
    fullname: '',
    avatar: '',
  });

  const [image, setImage] = useState(null);

  const convertbase64=(e)=>{
    console.log(e)
    let reader=new FileReader()
     reader.readAsDataURL(e.target.files[0])
     reader.onload=()=>{
      console.log(reader.result)
      setImage(reader.result)
     }
     reader.onerror=error=>{
      console.log("Error ",error)
     
     }
  }

 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('image', image);
      Object.keys(formData).forEach((key) => {
        formDataWithImage.append(key, formData[key]);
      });

      const response = await fetch('https://raddaf-be.onrender.com/auth/signup', {
        method: 'POST',
        body: formDataWithImage,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        setFormData({ ...formData, avatar: data.imageUrl });
      } else {
        console.error('Signup failed:', data.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='total-div'>
      {/* <Avatar alt="Remy Sharp"  sx={{ width: '9%', height: '115px' {image=="" || image==null?"": <img width={100} height={100} src={image} />}}} /> */}
     <Avatar  alt="Remy Sharp" sx={{ width: '8%', height: '90px',borderRadius:"50%"}}> {image=="" || image==null?"": <img style={{width:"100%", height:"100%",borderRadius:"50px"}}  src={image} />}</Avatar>
     

      <h2>Account</h2>

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

        <TextField type='file'  className="inputs" onChange={convertbase64} accept='image/*'/>

        <center  className='buttons12'>
          <Button sx={{color:"white",textTransform:"lowercase"}} type="button" onClick={handleSignup}>
          Signup
        </Button>
        </center>
      </form>
    </div>
  );
};

export default Signup;
