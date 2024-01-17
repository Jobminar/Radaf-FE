import React, { useState,useContext, useEffect } from "react";

export const AuthContext =React.createContext({authenticated:false})


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  
    const login = (username) => {
      setUser(username);
    };
  
    const logout = () => {
      setUser(null);
    };
  
    useEffect(() => {
        const storedUserData = sessionStorage.getItem("user");
      
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
      
          if (userData && userData.username) {
            setUser(userData.username);
            console.log(userData)
          }
        }
      }, []);
  
    return (
      <AuthContext.Provider value={{ authenticated:user }}>
        {children}
      </AuthContext.Provider>
    );
  };
export const useAuth=()=>{
    return useContext(AuthContext)
}