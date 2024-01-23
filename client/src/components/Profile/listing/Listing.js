import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../listing/listing.css'
import bedroomlogo from '../listing/images/bedsymbol.png'
import toilet from '../listing/images/toilet.png'
import washroom from '../listing/images/washroom.png'
import parking from '../listing/images/car.png'
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Listing = () => {
  const navigate=useNavigate()
  const handleProperty = (item) => {
    // setproperty(item);
    navigate('/underconstruction', { state: { property: item } });
    console.log(item,'data')
  };
const [age,setAge]=useState("")

  const handleCallAgent = () => {
    window.location.href = 'tel:6303364305';
  };
  const handleChange = (event) => {
        setAge(event.target.value);
      };
  
  const [saleListings, setSaleListings] = useState([]);
  const fetchListings = async () => {
    try {
      const url = `https://raddaf-be.onrender.com/listing-property/get-listings?purpose=Sale`;
      const response = await axios.get(url);
      const { data } = response;
      setSaleListings(data);
      console.log(saleListings);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const [mainImage, setMainImage] = useState('');

  const clicktop = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div className='Forsale-con1'>
    
     

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
              boxShadow: "none",
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
              renderValue={(value) => (value ? value : "Sale")}
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

      {saleListings.map((data, index) => (
        <div className='forsale-sub-con1' key={index}>
          <div className='forsale-img-sub-con1'>
          <div className='main-img-con1' onClick={() => handleProperty(data)}>
          {mainImage ? (
            <img src={mainImage} alt="Main" />
          ) : (
            data.images.length > 0 && <img src={data.images[0].Value} alt="First" />
          )}
          </div>
          <div className='sub-img-con1'>
            {data.images.map((image, index) => (
              <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-hw1'>
                <img src={image.Value} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
         </div>
          <div className='forsale-details-sub-con1'>
            <div className='forsale-details-sub1'>
              <div className='price1'><span>&#163; </span><span>299 PCM</span></div>
              <div className='apartment1'>{data.noOfBedrooms} bedroom apartment to rent</div>
              <div className='address1'>address</div>
              <div className='rooms-details1'>
                <div className='noofbedrooms1'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noOfBedrooms}</div>
                <div className='bathrooms1'><img src={washroom} alt='washroom'/>  {data.noOfBathrooms}</div>
                <div className='toilets1'><img src={toilet} alt='toilet'/>  {data.noOfToilets}</div>
                <div className='parking1'><img src={parking} alt='parking'/>  {data.parkingCapacity}</div>
              </div>
            </div>
            <div className='buttonagenthandle1'>
              <button className='button-connect1' onClick={handleCallAgent}>
                Contact with agent
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
