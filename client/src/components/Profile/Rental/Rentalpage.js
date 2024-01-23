
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../Rental/rental.css'
import bedroomlogo from '../Rental/images/bedsymbol.png'
import toilet from '../Rental/images/toilet.png'
import washroom from '../Rental/images/washroom.png'
import parking from '../Rental/images/car.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Viewpage = () => {
  const navigate=useNavigate()
  const handleProperty = (item) => {
    // setproperty(item);
    navigate('/underconstruction', { state: { property: item } });
    console.log(item,'data')
  };
  const [color,setColor]=useState('white')
  const handleCallAgent = () => {
    window.location.href = 'tel:6303364305';
  };
  
  const handleClick = () => {
        setColor((prevColor) => (prevColor === 'white' ? 'red' : 'white'));
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
    <div className='Forsale-con3'>
    

          <div className="head3">
          <p className="p3">My rental request</p>
       <p>Request :<span style={{color:"green"}}>Approved</span></p>
        

      </div>

      {saleListings.map((data, index) => (
        <div className='forsale-sub-con3' key={index}>
          <div className='forsale-img-sub-con3'>
          <div className='main-img-con3' onClick={() => handleProperty(data)}>
          {mainImage ? (
            <img src={mainImage} alt="Main" />
            
          ) : (
            data.images.length > 0 && <img src={data.images[0].Value} alt="First" />
            
          )}
           <Icon onClick={handleClick}><FavoriteIcon  sx={{position:'absolute',top:"125px",left:"646px",fontSize:55,color: color,cursor:"pointer"}}/></Icon>
          </div>
          <div className='sub-img-con3'>
            {data.images.map((image, index) => (
              <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-hw3'>
                <img src={image.Value} alt={`Image ${index}`} />
               
              </div>
            ))}
          </div>
         </div>
          <div className='forsale-details-sub-con3'>
            <div className='forsale-details-sub3'>
              <div className='price3'><span>&#163; </span><span>299 PCM</span></div>
              <div className='apartment3'>{data.noOfBedrooms} bedroom apartment to rent</div>
              <div className='address3'>address</div>
              <div className='rooms-details3'>
                <div className='noofbedrooms3'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noOfBedrooms}</div>
                <div className='bathrooms3'><img src={washroom} alt='washroom'/>  {data.noOfBathrooms}</div>
                <div className='toilets3'><img src={toilet} alt='toilet'/>  {data.noOfToilets}</div>
                <div className='parking3'><img src={parking} alt='parking'/>  {data.parkingCapacity}</div>
              </div>
            </div>
            <div className='buttonagenthandle3'>
              <button className='button-connect3' onClick={handleCallAgent}>
                Contact with agent
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewpage;
