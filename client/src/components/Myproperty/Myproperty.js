import React, { useEffect, useState } from 'react';
import './Myproperty.css'
import Tolet from '../LettingProperties/Lettingproperties.js';
import Forsale from '../Undersale/Undersale.js';
import Myprop from "./my.js"
import CircularProgress from '@mui/material/CircularProgress';
import Letted from '../LettedProperties/Lettedproperties.js';




const Myproperty = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [listings, setListings] = useState([]);

  let content;

  switch (selectedOption) {
    case 'Letted Properties':
      content=<Letted/>
      break
    case 'Letting Properties':
      // Render specific component for 'Letted Properties' or 'Letting Properties'
      content = <Tolet />;
      break;
    case 'Properties under sale':
      // Render specific component for 'Properties under sale'
      content = <Forsale />;
      break;
    default:
      content = <Myprop/>
  }
  // Options for the dropdown
  const options = [
    'Letted Properties',
    'Letting Properties',
    'Properties under sale',
  ];

  // Event handler for option selection
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raddaf-be.onrender.com/listing-property/get-listings');
        const data = await response.json();
        setListings(data); // Update the state with fetched data
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mainco'>
      <div style={{display:"flex",alignItems:"center"}}>

        <h3>Filter :</h3>
        <select
          value={selectedOption}
          onChange={(e) => handleSelect(e.target.value)} style={{ background: "#BE6B2E",textAlign:"center",color:"white", border: "none", width: "182px",height:"50px", fontSize: "18px",borderRadius:"10px",marginLeft:"10px" }}
        >
          <option value="">My Properties</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <>
      {loading ? (
        // Render loading spinner while data is being fetched
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
          
        </div>
      ) : (
      <div className='row-container'>
        {content}
      </div>
      )}
      </>
    </div>
  );
};

export default Myproperty;
