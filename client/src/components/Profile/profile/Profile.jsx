import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FcGoogle } from "react-icons/fc";
import Logo from "./logo.svg";
import imgs from '../profile/imgs.jpg';
import '../profile/login.css';
import SocialAuth from "../SocialAuth";
import Facebook from "./Facebook";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://raddaf-be.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("token", data.token);

        if (data.user && data.user.email) {
          sessionStorage.setItem("user", JSON.stringify(data.user));
          alert(`Hi ${data.user.email}, Welcome!`);
          navigate("/");
        } else {
          console.error("User data not available in the response:", data);
        }
      } else {
        console.error("Error details:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-div">
      <div className="first-div">
        <div className="form-in1">
          <div className="img-logo">
            <img src={Logo} alt="img" width="100%" height="100%" />
          </div>

          {/* <p>Sign in to save properties and much more</p> */}

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "70%",
            }}
          >
            <TextField
              sx={{ width: "100%", height: "auto" }}
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
              <InputLabel htmlFor="outlined-adornment-amount">
                Password
              </InputLabel>
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
              <p
                style={{
                  fontSize: "79%",
                  cursor: "pointer",
                  marginLeft: "-100px",
                }}
              >
                Forget Password
              </p>
              <p style={{ fontSize: "85%", cursor: "pointer" }}>
                {" "}
                <input type="checkbox" />
                Keep me in signed in for 7 days
              </p>
            </div>
            <button className="button2">Sign In</button>
           <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <SocialAuth />
            <Facebook />
            </div>
          </form>

          <div
            style={{ color: "#919191", fontFamily: "Roboto", fontSize: "10px" }}
          >
            By signing in you accept our Terms of use and Privacy Policy
          </div>
          <p style={{ cursor: "pointer" }}>
            No account? &nbsp; <span onClick={() => navigate("/signup")}> Register Now</span>
          </p>
        </div>
      </div>
      <div className="last-div">
        <img src={imgs} alt="img" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Login;

