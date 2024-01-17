import React from 'react'
import { useAuth ,AuthContext} from './auth'
import { Navigate } from 'react-router-dom'
import Login from "../components/Profile/profile/Profile"
// import {AuthContext} "./auth"

const PrivateRoute = ({children}) => {
    
  return (
    < AuthContext.Consumer>
    {context => context.authenticated? children:<Login/>}
    </AuthContext.Consumer>
  )
}

export default PrivateRoute
