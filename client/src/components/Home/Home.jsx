import './Home.css'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useNavigate } from 'react-router-dom';
// images
import mainimg from './Images/main-img.png'
import sale1 from './Images/sale1.png'
import sale2 from './Images/sale2.png'
import sale3 from './Images/sale3.png'
import rent1 from './Images/rent1.png'
import rent2 from './Images/rent2.png'
import rent3 from './Images/rent3.png'
import toiletlogo from './Images/toilet-logo.png'

const Home =(()=>{
    const navigate = useNavigate()
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
                        <h1 onClick={()=>{navigate('/')}}>Buy</h1>
                        <h1>Rent</h1>
                        <h1>Instant valuation</h1>
                    </div>
                    <div className='search-field-home'>
                        <Paper
                            className='search-field-sub-home'
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
                            >
                            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Where do you want to Buy ?'"
                                inputProps={{ 'aria-label': 'Where do you want to Buy ?' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                <DirectionsIcon />
                            </IconButton> */}
                        </Paper>
                    </div>
                </div>

                {/* Sale section */}
                <h1 className='sale-head'>Sale</h1>
                 <div className='sale-home-con'>
                 <div className='sub-card'>
                    <Card sx={{  height : 375 , border: '1px solid #F1E36E'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            className='cardimg'
                            height="190"
                            image={sale3}
                            alt="green iguana"
                            />
                            <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CurrencyPoundIcon />
                                <Typography style={{ marginLeft: '0.5rem' }}>475,000</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>2 bedroom flat for sale</Typography>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>Norfolk House Road, Streatham</Typography>
                            </div>
                            <div className='room-list'>
                                <SingleBedIcon/>
                                <Typography>2</Typography>
                                <BathtubIcon/>
                                <Typography>2</Typography>
                                <img src={toiletlogo} alt='toiletlogo'/>
                                <Typography>2</Typography>

                            </div>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    </div>
                    <div className='sub-card'>
                    <Card sx={{  height : 375 , border: '1px solid #F1E36E'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            className='cardimg'
                            height="190"
                            image={sale1}
                            alt="green iguana"
                            />
                            <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CurrencyPoundIcon />
                                <Typography style={{ marginLeft: '0.5rem' }}>475,000</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>2 bedroom flat for sale</Typography>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>Norfolk House Road, Streatham</Typography>
                            </div>
                            <div className='room-list'>
                                <SingleBedIcon/>
                                <Typography>2</Typography>
                                <BathtubIcon/>
                                <Typography>2</Typography>
                                <img src={toiletlogo} alt='toiletlogo'/>
                                <Typography>2</Typography>
                            </div>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    </div>
                    <div className='sub-card'>
                    <Card sx={{  height : 375 , border: '1px solid #F1E36E'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            className='cardimg'
                            height="190"
                            image={sale2}
                            alt="green iguana"
                            />
                            <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CurrencyPoundIcon />
                                <Typography style={{ marginLeft: '0.5rem' }}>475,000</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>2 bedroom flat for sale</Typography>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>Norfolk House Road, Streatham</Typography>
                            </div>
                            <div className='room-list'>
                                <SingleBedIcon/>
                                <Typography>2</Typography>
                                <BathtubIcon/>
                                <Typography>2</Typography>
                                <img src={toiletlogo} alt='toiletlogo'/>
                                <Typography>2</Typography>
                            </div>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    </div>
                    
                </div>   
                <h1 style={{ display: 'flex', justifyContent:'right',alignItems: 'center' }} className='showmoreproperty'>
                    Show More Sale Properties
                    <ArrowCircleRightRoundedIcon style={{ fontSize: '30px', marginLeft: '5px' }} />
                </h1>    

                          {/*Rent section  */}

                 <h1 className='sale-head'>Rent</h1>
                 <div className='sale-home-con'>
                 <div className='sub-card'>
                    <Card sx={{  height : 375 , border: '1px solid #F1E36E'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            className='cardimg'
                            height="190"
                            image={rent1}
                            alt="green iguana"
                            />
                            <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CurrencyPoundIcon />
                                <Typography style={{ marginLeft: '0.5rem' }}>475,000</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>2 bedroom flat for sale</Typography>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>Norfolk House Road, Streatham</Typography>
                            </div>
                            <div className='room-list'>
                                <SingleBedIcon/>
                                <Typography>2</Typography>
                                <BathtubIcon/>
                                <Typography>2</Typography>
                                <img src={toiletlogo} alt='toiletlogo'/>
                                <Typography>2</Typography>
                            </div>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    </div>
                    <div className='sub-card'>
                    <Card sx={{  height : 375 , border: '1px solid #F1E36E'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            className='cardimg'
                            height="190"
                            image={rent2}
                            alt="green iguana"
                            />
                            <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CurrencyPoundIcon />
                                <Typography style={{ marginLeft: '0.5rem' }}>475,000</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>2 bedroom flat for sale</Typography>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>Norfolk House Road, Streatham</Typography>
                            </div>
                            <div className='room-list'>
                                <SingleBedIcon/>
                                <Typography>2</Typography>
                                <BathtubIcon/>
                                <Typography>2</Typography>
                                <img src={toiletlogo} alt='toiletlogo'/>
                                <Typography>2</Typography>
                            </div>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    </div>
                    <div className='sub-card'>
                    <Card sx={{  height : 375 , border: '1px solid #F1E36E'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            className='cardimg'
                            height="190"
                            image={rent3}
                            alt="green iguana"
                            />
                            <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CurrencyPoundIcon />
                                <Typography style={{ marginLeft: '0.5rem' }}>475,000</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>2 bedroom flat for sale</Typography>
                                <Typography style={{ marginLeft: '0.5rem', marginTop: '0.5rem', marginBottom: 'auto' }}>Norfolk House Road, Streatham</Typography>
                            </div>
                            <div className='room-list'>
                                <SingleBedIcon/>
                                <Typography>2</Typography>
                                <BathtubIcon/>
                                <Typography>2</Typography>
                                <img src={toiletlogo} alt='toiletlogo'/>
                                <Typography>2</Typography>
                            </div>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    </div>
                    
                </div>   
                <h1 style={{ display: 'flex', justifyContent:'right',alignItems: 'center' }} className='showmoreproperty'>
                    Show More Rent Properties
                    <ArrowCircleRightRoundedIcon style={{ fontSize: '30px', marginLeft: '5px' }} />
                </h1> 
                </div>
        </>
    )
})
export  default Home
