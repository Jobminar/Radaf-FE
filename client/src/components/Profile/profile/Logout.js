// import { Cookie } from "@mui/icons-material";
import Cookies from 'universal-cookie';
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from '../../../Provider';

// import { useHistory } from "react-router-dom";


function Logout() {

 
  // const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if session has expired
    const checkSessionExpiration = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          // No token available, navigate to login page
          // alert("first login details")
          // history.replace("/login");
          window.location.replace("/");
          // navigate("/login");
          return;
        }

        const response = await fetch(
          "http://localhost:3000/auth/check-session",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          // Session expired, navigate to login page
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };

    checkSessionExpiration();
  }, [navigate]);

  // Logout logic
  const handleLogout = () => {
    // Clear sessionStorage and navigate to login page
    // navigate("/login",{ replace: true });
    
    sessionStorage.clear();
    const cookies = new Cookies();
    window.location.replace("/login");


  // Remove the token and user cookies
  // cookies.remove('token', { path: '/' });
    // navigate("/login");
  };

  return (
    <div style={{width:"100%",height:"100%"}}>
      {/* <h1>Hii welcome to Raddaf homes</h1> */}
      <button style={{border:"none",background:'none',cursor:'pointer',fontSize:'18px'}} onClick={handleLogout}>Logout</button>
      </div>
  );
}

export default Logout;
