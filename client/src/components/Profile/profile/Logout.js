import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if session has expired
    const checkSessionExpiration = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          // No token available, navigate to login page
          alert("first login details")
          navigate("/profile");
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
          navigate("/");
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
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div style={{width:"100%",height:"100%"}}>
      {/* <h1>Hii welcome to Raddaf homes</h1> */}
      <button style={{marginBottom:"10px",background:"red",border:"none",width:"40%",height:"30px",borderRadius:"10px"}} onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;