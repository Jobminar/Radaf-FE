import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
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
import Logo from './logo.png';
import '../profile/login.css';
import SocialAuth from "../SocialAuth";
import Facebook from "./Facebook";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

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
          Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: 'User signup  has been successfully ',
          });
          navigate("/");
        } else {
          console.error("User data not available in the response:", data);
          Swal.fire({
            icon: 'error',
            title: 'Signup failed!',
            text: "invalid credentilas"
          });
        }
      } else {
        console.error("Error details:", data);
        Swal.fire({
          icon: 'error',
          title: 'Signup failed!',
          text:"invalid credentilas"
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="main-div">
      <div className="first-div">
        <div className="form-in1">
          <div className="img-logo">
            <img src={Logo} alt="img" width="100%" height="100%" />
          </div>

          {loading && <CircularProgress sx={{ color: "#9E5C08" }} />}

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

            <button className="button2" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
        {/* ... (existing content) */}
      </div>
    </div>
  );
};

export default Login;
