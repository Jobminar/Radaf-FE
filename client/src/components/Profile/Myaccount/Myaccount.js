// import React, { useState } from 'react';
// import { Avatar, TextField, Button, IconButton } from '@mui/material';
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// import '../Myaccount/myaccount.css';

// const Myaccount = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     title: '',
//     fullname: '',
//     avatar: '',
//   });

//   const [image, setImage] = useState(null);

//   const convertBase64 = (e) => {
//     let reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//     reader.onerror = (error) => {
//       console.log('Error ', error);
//     };
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const editHandler = () => {
//     sessionStorage.getItem('email', email.current.value);
//     sessionStorage.getItem('fullname', fullname.current.value);
//     sessionStorage.getItem('title', title.current.value);
  
//   };

//   return (
//     <div className='total-div'>
//       <Avatar alt="Remy Sharp" sx={{ width: '8%', height: '90px', borderRadius: '50%' }}>
//         {image !== '' && image !== null ? <img style={{ width: '100%', height: '100%', borderRadius: '50px' }} src={image} alt="avatar" /> : null}
//       </Avatar>

//       <h2>My Account</h2>

//       <form className="form-field">
//         <TextField
//           type="text"
//           name="username"
//           className="inputs"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//         />

//         <TextField
//           type="email"
//           name="email"
//           className="inputs"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />

//         <TextField
//           type="password"
//           name="password"
//           className="inputs"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />

//         <TextField
//           type="text"
//           name="title"
//           className="inputs"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleInputChange}
//         />

//         <TextField
//           type="text"
//           name="fullname"
//           className="inputs"
//           placeholder="Fullname"
//           value={formData.fullname}
//           onChange={handleInputChange}
//         />

//         <TextField type="file" className="inputs" onChange={convertBase64} accept="image/*" />

//         <center className='center'>
//           <Button className='buttonsmy'>Update</Button>
//           <IconButton onClick={editHandler}>
//             <EditCalendarIcon />
//           </IconButton>
//         </center>
//       </form>
//     </div>
//   );
// };

// export default Myaccount;
