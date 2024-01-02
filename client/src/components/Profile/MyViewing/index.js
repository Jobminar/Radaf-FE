import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../listing/listing.css";
import { images } from "../listing/Data";
import { data } from "../listing/Data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Icon } from "@mui/material";
import bed from '../listing/bed.jpg'
import group from '../listing/Group.jpg'
import vector from '../listing/Vector1.jpg'
import car from '../listing/car.jpg'
import share from '../listing/share.jpg'
import logo from '../listing/logo.svg'

const Viewpage = () => {
  const [age, setAge] = React.useState("");
  const [color,setColor]=useState('white')
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = () => {
    setColor((prevColor) => (prevColor === 'white' ? 'red' : 'white'));
  };

  return (
    <div>
        
      <div className="h2">
        <h1>My listing request for</h1>
        <div>
          <FormControl
            sx={{
              m: 1,
              minWidth: 280,
              width: "55%",
              backgroundColor: "#9E5C08",
              borderRadius: "40px",
              boxShadow: "none", // Remove all borders
              height: "auto",
            }}
          >
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={{ display: "none" }}
            >
              Sale
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              displayEmpty
              renderValue={(value) => (value ? value : "Sale")} // Render placeholder text
              sx={{
                border: "#BE6B2E",
                background: "#BE6B2E",
                color: "white",
                fontFamily: "bold",
              }}
            >
              <MenuItem value={10}>Rental</MenuItem>
              <MenuItem value={21}>Rental</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="main1">
        <div className="image-section">
          <div className="main-image-section">
            {images.slice(0, 1).map((ele) => (
              <div key={ele.id} className="main-image">
              
                <img 
                  className="main-image-large"
                  src={ele.img}
                  alt={ele.title}
                />
                <Icon onClick={handleClick}><FavoriteIcon  sx={{position:'absolute',left:587,top:187,fontSize:55,color: color,cursor:"pointer"}}/></Icon>
              </div>
            ))}
          </div>
          <div className="sub-images">
            {images.slice(1).map((ele) => (
              <div className="grid" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="grid-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          {data.map((ele,ind) => (
            <div className="content-inside" key={ind}>
               <h1><b>{ele.month}PCM(~190PW)</b></h1>
               <h2>{ele.sale}</h2>
               <p>{ele.description}</p>
         <div className="icons">
             <span><img src={bed} alt="bed"/></span>
             <span><img src={group} alt="group"/></span>
             <span><img src={vector} alt="vector1" /></span>
             <span><img src={car} alt="car"/></span>
             <span><img src={share} alt="share"/></span>
             <button className="button1">Contact with agent</button>
         </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <div style={{width:"30%",height:"40%",marginTop:"5%"}}>
            <img width="100%" height="100%" src={logo} alt="logo"/></div>
        <div>
         <h2>Join us</h2>
         <p>Become an Ajent</p>
         <p>Get referrals </p>
         <p>Careers</p>
        </div>

        <div>
           <h2>Useful Links</h2>
           <p>About Us</p>
           <p>Property For Sale</p>
           <p>Property to Rent</p>
           <p>Register</p>
           <p>Property Valuation</p>            
            </div>

        <div>
            <h2>Find Us On</h2>
            <p>Linked in</p>
            <p>Facebook</p>
            <p>Instagram</p>
            </div>
        <div>
            <h2>Countries</h2>
            <p>United States</p>
            <p>Canada</p>
            </div>
      </footer>
    </div>
  );
};

export default Viewpage;
