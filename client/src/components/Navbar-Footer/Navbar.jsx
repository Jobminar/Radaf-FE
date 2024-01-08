import React, { useState ,useEffect} from 'react';
import './Navbar.css';
import axios from 'axios';
import logo from '../Home/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Popover,
} from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    switch (event.target.value) {
      case 'Manage my profile':
        navigate('/profile');
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
          navigate('/signup')
        break;
        case 'Myaccount':
        navigate('/myaccount');
        break;
        case 'logout':
        navigate('/logout')
        break

      default:
        break;
    }
    handlePopoverClose(); 
  };

  return (
    <div className='navbar-con'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='route' onClick={() => navigate('/')}>
        Home
      </div>
      <div className='route' onClick={() => navigate('/aboutus')}>
        About us
      </div>
      <div className='route' onClick={() => navigate('/valuemyhome')}>
        Value my Home
      </div>
      <div className='route' onClick={()=>navigate('/forsale')}>
        For Sale
        </div>
      <div className='route'  onClick={()=>navigate('/listaproperty')}>
        List my Property
        </div>
      <div className='route'onClick={()=>navigate('/tolet')}>
        To-let
        </div>
      <div className='route' onClick={()=>navigate('/myproperty')}>
        My-Property
        </div>
      <div className='route' onClick={() => navigate('/support')}>
        Support
      </div>

      <div className='routesignin' onClick={handlePopoverOpen}>
        <PersonOutlineRoundedIcon />
        Sign in
      </div>

      {/* Popover for the dropdown menu */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <FormControl sx={{ p: 2 }}>
          <InputLabel
            id='demo-simple-select-autowidth-label'
            sx={{ display: 'none' }}
          >
            Profile
          </InputLabel>
          <Select
            labelId='demo-simple-select-autowidth-label'
            id='demo-simple-select-autowidth'
            onChange={handleChange}
            autoWidth
            displayEmpty
            renderValue={(value) => (value ? value : 'Profile')}
            sx={{
              border: '#BE6B2E',
              background: '#BE6B2E',
              color: 'white',
              fontFamily: 'bold',
            }}
          >
            <MenuItem value='Manage my profile'>Manage my profile</MenuItem>
            <MenuItem value='signup'>Signup</MenuItem>
            <MenuItem value='My listing request'>My listing request</MenuItem>
            <MenuItem value='My viewing'> My viewing</MenuItem>
            <MenuItem value='My rental request'>My rental request</MenuItem>
            <MenuItem value='Myaccount'>My account</MenuItem>
            <MenuItem value='Logout'>Logout</MenuItem>
            
          </Select>
        </FormControl>
      </Popover>
    </div>
  );
};

export default Navbar;
