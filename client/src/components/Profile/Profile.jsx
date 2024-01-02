import React, {useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FcGoogle } from "react-icons/fc";
import '../Profile/login.css'
import Logo from './logo.svg'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="main-div">
     
    
        <div className="form-in">
  
       <div className="img-logo"> <img src={Logo} alt="img" width="100%" height="100%"/>  </div>
        <p>  Sign in to save properties and much more</p>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, width: "70%" }}>
            <TextField sx={{width:"100%"}}
              value={formData.email}
              name="email"
              onChange={handleChange}
              label="Email address"
              type="email"
              id="outlined-password-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOpenIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </FormControl>

            <div>
              <p style={{ fontSize: "79%", cursor: "pointer",marginLeft:"-100px" }}>Forget Password</p>
               <p style={{ fontSize: "85%", cursor: "pointer" }}> <input type="checkbox" />Keep me in signed in for 7 days</p>
            </div>  
            <button className="button2">Sign In</button>        
          </form>
          <div style={{color:"#919191",fontFamily:"Roboto",fontSize:"10px"}}>By signing in you accept our Terms of use and Privacy Policy</div>

          <div>or sign in with</div>
           
          <div style={{ display: "flex", gap: 30, cursor: "pointer" }}>
            <FcGoogle style={{ fontSize: "25px" }} />
            <FacebookIcon sx={{ color: "blue" }} />
           
          </div>
          <p style={{cursor:"pointer"}}>No account?  &nbsp; Register Now</p>
          
        </div>
        
      </div>
  
  );
};

export default Login;
