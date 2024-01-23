// Navbar.js
import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Home/Images/logo.png";
import logo1 from "../Forsale/images/Raddaficon1.png"
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  FormControl,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import { Data } from "../../Provider";
import Logout from "../Profile/profile/Logout";

const Navbar = ({ children }) => {
  const { show, setShow } = useContext(Data);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (route) => {
    navigate(route);
    handleMenuClose();
  };

  const handleNavigation = (route) => {
    if (show) {
      handleChange(route);
    } else {
      alert("Login first");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="navbar-con">
        <div className="logo newlogo">
          <img style={{height:"80px"}} src={logo1} alt="logo" />
        </div>

        <div className="route" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="route" onClick={() => navigate("/aboutus")}>
          About us
        </div>
        <div className="route" onClick={() => navigate("/valuemyhome")}>
          Value my Home
        </div>
        <div className="route" onClick={() => navigate("/forsale")}>
          For Sale
        </div>
        <div className="route" onClick={() => handleNavigation("/listaproperty")}>
          List my Property
        </div>
        <div className="route" onClick={() => navigate("/tolet")}>
          To-let
        </div>
        <div className="route" onClick={() => handleNavigation("/myproperty")}>
          My-Property
        </div>
        <div className="route" onClick={() => navigate("/support")}>
          Support
        </div>

        <div className="routesignin">
          {show ? (
            <FormControl variant="standard" sx={{ p: 2, border: "white" }}>
              <IconButton onClick={handleMenuOpen} sx={{ padding: 0 }}>
                <AccountCircleIcon
                  id="icon"
                  sx={{ background: "#BE6B2E", borderRadius: "50px", color: "white", cursor: "pointer" }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={() => handleNavigation("/listing")}>My listing request</MenuItem>
                <MenuItem onClick={() => handleNavigation("/viewpage")}>My viewing</MenuItem>
                <MenuItem onClick={() => handleNavigation("/myaccount")}>My account</MenuItem>
                <MenuItem onClick={() => handleNavigation("/myaccount")}>Favourite</MenuItem>
                <MenuItem><Logout /></MenuItem>

              </Menu>
            </FormControl>
          ) : (
            <IconButton onClick={() => navigate("/login")}>
              <AccountCircleIcon sx={{ color: "#955108" }} />
            </IconButton>
          )}
        </div>
      </div>

      <div style={{ marginTop: "7%" }}>{children}</div>
    </div>
  );
};

export default Navbar;
