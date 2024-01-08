import React, { useState, useEffect } from 'react';
import { Avatar, TextField, Button, IconButton } from '@mui/material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import '../Myaccount/myaccount.css';

const Myaccount = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    title: '',
    fullname: '',
    avatar: '',
  });

  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userString = sessionStorage.getItem('user');
    console.log('userString:', userString);

    try {
      const user = userString ? JSON.parse(userString) : {};
      console.log('user:', user);

      setFormData({
        username: user.username || '',
        email: user.email || '',
        password: user.password || '',
        title: user.title || '',
        fullname: user.fullname || '',
        avatar: user.profileImage || '',
      });

      setImage(user.profileImage || null);
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  const convertBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.error('Error reading image:', error);
    };
  };

  const handleInputChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('https://raddaf-be.onrender.com/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Update successful:', data);
        setIsEditing(false);
      } else {
        console.error('Update failed:', data.error);
      }
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className='total-divs'>
      <Avatar alt="Remy Sharp" sx={{ width: '8%', height: '90px', borderRadius: '50%' }}>
        {image ? <img style={{ width: '100%', height: '100%', borderRadius: '50px' }} src={image} alt="avatar" /> : null}
      </Avatar>

      <h2>My Account</h2>

      <form className="form-fieldss">
        <div className='forminside'>
          <TextField
            type="text"
            name="username"
            className="inputs"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            disabled={!isEditing}
          />

          <TextField
            type="email"
            name="email"
            className="inputs"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />

          <TextField
            type="password"
            name="password"
            className="inputs"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={!isEditing}
          />

          <TextField
            type="text"
            name="title"
            className="inputs"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            disabled={!isEditing}
          />

          <TextField
            type="text"
            name="fullname"
            className="inputs"
            placeholder="Fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            disabled={!isEditing}
          />

          <TextField
            type="file"
            name="avatar"
            className="inputs"
            onChange={convertBase64}
            accept="image/*"
            disabled={!isEditing}
          />

          <center className='center'>
            {isEditing ? (
              <Button variant="contained" className='buttonsmy' onClick={handleUpdate}>
                Update
              </Button>
            ) : (
              <IconButton onClick={handleEditClick}>
                Edit: <EditCalendarIcon />
              </IconButton>
            )}
          </center>
        </div>
      </form>
    </div>
  );
};

export default Myaccount;
