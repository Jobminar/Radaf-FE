import React, { useState } from "react";
import '../MyViewing/viewpage.css'
import { data } from "../listing/Data";
import { viewpage } from "../listing/Data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Icon } from "@mui/material";
import bed from '../listing/bed.jpg'
import group from '../listing/Group.jpg'
import vector from '../listing/Vector1.jpg'
import car from '../listing/car.jpg'
import share from '../listing/share.jpg'
const Viewpage = () => {
  
  const [color,setColor]=useState('white')
 
  const handleClick = () => {
    setColor((prevColor) => (prevColor === 'white' ? 'red' : 'white'));
  };

  return (
    <div>
        
      <div className="head">
        <h1>My Viewing</h1>
        <p className="p">upcoming viewing</p>
        <p className="p">23rd March 2024, 1:32pm</p>
        <div>
      
        </div>
      </div>

      <div className="main2">
        <div className="image-section2">
          <div className="main-image-section2">
            {viewpage.slice(0, 1).map((ele) => (
              <div key={ele.id} className="main-image2">
              
                <img 
                  className="main-image-large2"
                  src={ele.img}
                  alt={ele.title}
                />
                <Icon onClick={handleClick}><FavoriteIcon  sx={{position:'absolute',top:"220px",left:"572px",fontSize:55,color: color,cursor:"pointer"}}/></Icon>
              </div>
            ))}
          </div>
          <div className="sub-images2">
            {viewpage.slice(1).map((ele) => (
              <div className="grid2" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="grid-img2" />
              </div>
            ))}
          </div>
        </div>

        <div className="content-section2">
          {data.map((ele,ind) => (
            <div className="content-inside2" key={ind}>
               <h1><b>{ele.month}PCM(~190PW)</b></h1>
               <h2>{ele.sale}</h2>
               <p>{ele.description}</p>

        <div className="icons">
         <img src={bed} alt="bed"/>
            <img src={group} alt="group"/>
            <img src={vector} alt="vector1" />
            <img src={car} alt="car"/>
            <img src={share} alt="share"/>        
         </div>
         <button className="button2">Contact with agent</button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Viewpage;
