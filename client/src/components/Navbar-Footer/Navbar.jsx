import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Home/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import Logout from '../Profile/profile/Logout';
import { useAuth } from '../auth';

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const auth = useAuth();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    switch (event.target.value) {
      case 'SignIn':
        navigate('/login');
        break;
      case 'My listing request':
        navigate('/listing');
        break;
      case 'My viewing':
        navigate('/viewpage');
        break;
      case 'My rental request':
        navigate('/rentalpage');
        break;
      case 'signup':
        navigate('/signup');
        break;
      case 'Myaccount':
        navigate('/myaccount');
        break;
      case 'Logout':
        // Add logout functionality here if needed
        navigate('/login');
        break;
      default:
        break;
    }
    handlePopoverClose();
  };

  const dd = sessionStorage.getItem('token');

  return (
    <div>
      <div className='navbar-con'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        {dd ? (
          <>
            <div className='route' onClick={() => navigate('/')}>
              Home
            </div>
            {/* Add other authenticated routes as needed */}
            <div className='routesignin'>
              <FormControl sx={{ p: 2 }}>
                <Select
                  labelId='demo-simple-select-autowidth-label'
                  id='demo-simple-select-autowidth'
                  onChange={handleChange}
                  autoWidth
                  displayEmpty
                  renderValue={(value) =>
                    value ? value : <AccountCircleIcon />
                  }
                  sx={{
                    border: '#BE6B2E',
                    background: '#BE6B2E',
                    color: 'white',
                    fontFamily: 'bold',
                  }}
                >
                  <MenuItem value='My listing request'>My listing request</MenuItem>
                  <MenuItem value='My viewing'> My viewing</MenuItem>
                  <MenuItem value='My rental request'>My rental request</MenuItem>
                  <MenuItem value='Myaccount'>My account</MenuItem>
                  <MenuItem value='Logout'><Logout /></MenuItem>
                </Select>
              </FormControl>
            </div>
          </>
        ) : (
          <>
            <div className='routesignin'>
              <FormControl sx={{ p: 1 }}>
                <Select
                  labelId='demo-simple-select-autowidth-label'
                  id='demo-simple-select-autowidth'
                  onChange={handleChange}
                  autoWidth
                  displayEmpty
                  renderValue={(value) => (
                    value ? <AccountCircleIcon /> : <AccountCircleIcon />
                  )}
                  sx={{
                    border: '#BE6B2E',
                    background: '#BE6B2E',
                    color: 'white',
                    fontFamily: 'bold',
                  }}
                >
                  <MenuItem value='SignIn'>Sign In</MenuItem>
                  <MenuItem value='signup'>Signup</MenuItem>
                </Select>
              </FormControl>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
};

export default Navbar;
