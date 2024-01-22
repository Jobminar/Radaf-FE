import './Home.css'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
// images
import mainimg from './Images/main-img.png'
import Forsalehome from './forsalehome';
import Tolethome from './tolethome';
import { useAuth } from '../auth';

const Home =(()=>{
    const navigate = useNavigate()
    const data=useAuth()
    console.log(data)
    return(
        <>
            <div className="home-con">
                {/* mainimg */}
                <div className='main-img'>
                    <img src={mainimg} alt='main-img'/>
                </div>
                {/* search section */}
                <div className='main-serch'>
                    <div className='serch-routes'>
                        <h1 onClick={()=>{navigate('/forsale')}}>Buy</h1>
                        <h1 onClick={()=>{navigate('/tolet')}}>Rent</h1>
                        <h1 onClick={()=>{navigate('/valuemyhome')}}>Instant valuation</h1>
                    </div>
                    <div className='search-field-home'  style={{ width: '100%'}}>
                    <Paper
                        className='search-field-sub-home'
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
                    >
                        <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Where do you want to Buy ?'"
                        inputProps={{ 'aria-label': 'Where do you want to Buy ?' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    </Paper>
                    </div>
                </div>

                {/* Sale section */}
                <div className='sale-section'>
                        <Forsalehome/>  
                </div>

                          {/*Rent section  */}
                <div className='sale-section'>
                     <Tolethome/>  
                </div>                
                        
                </div>
        </>
    )
})
export  default Home
