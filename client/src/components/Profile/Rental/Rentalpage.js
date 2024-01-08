import React, { useState } from "react";
import '../Rental/rental.css'
import { data } from "../listing/Data";
import { viewpage } from "../listing/Data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Icon } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotTubIcon from '@mui/icons-material/HotTub';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';

const Viewpage = () => {
  
  const [color,setColor]=useState('white')
  const [count,setCount]=useState(0)
 
  const handleClick = () => {
    setColor((prevColor) => (prevColor === 'white' ? 'red' : 'white'));
  };

  return (
    <div>
      <div className="headr">
        <p className="p1">My rental request</p>
        <p>Request :<span style={{color:"green"}}>Approved</span></p>
        <div>
       </div>
      </div>

      <div className="mainr">
        <div className="image-sectionr">
          <div className="main-image-sectionr">

            {viewpage.slice(0, 1).map((ele) => (
              <div key={ele.id} className="main-imager">
              
                <img 
                  className="main-image-larger"
                  src={ele.img}
                  alt={ele.title}
                />
                <Icon onClick={handleClick}><FavoriteIcon  sx={{position:'absolute',top:"165px",left:"556px",fontSize:55,color: color,cursor:"pointer"}}/></Icon>
              </div>
            ))}
          </div>
          <div className="sub-imagesr">
            {viewpage.slice(1).map((ele) => (
              <div  key={ele.id}>
                <img src={ele.img} alt={ele.title} className="sub-images" />
              </div>
            ))}
          </div>
        </div>

        <div className="content-sectionr">
          {data.map((ele,ind) => (
            <div className="content-insider" key={ind}>
               <h1><b>{ele.month}PCM(~190PW)</b></h1>
               <h2>{ele.sale}</h2>
               <p>{ele.description}</p>

        <div className="icons">
           <BedIcon /><span>{count}</span>
           <BathtubIcon /> <span>{count}</span>
           <HotTubIcon /><span>{count}</span>  
           <AirportShuttleOutlinedIcon /><span>{count}</span>
         </div>
         <button  style={{background:"#9E5C08",color:'white',width:"70%",height:"15%",border:"none",borderRadius:"10px"}}>Contact with agent</button>
            </div>
          ))}
        </div>
        
      </div>
      
  
    </div>
  );
};

export default Viewpage;
