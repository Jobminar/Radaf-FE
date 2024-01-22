import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../Undersale/undersale.css';
import { useNavigate } from 'react-router-dom';
import bedroomlogo from '../Forsale/images/bedsymbol.png';
import toilet from '../Forsale/images/toilet.png';
import washroom from '../Forsale/images/washroom.png';
import parking from '../Forsale/images/car.png';
import CircularProgress from '@mui/material/CircularProgress';

const Tolet = () => {
   const navigate = useNavigate()
   const [loading, setLoading] = useState(true);
  const handleCallAgent = () => {
    window.location.href = 'tel:6303364305';
  };

  const [selectedBedroom, setSelectedBedroom] = useState('');
   
   console.log(selectedBedroom)

  const [toletListings, setToletListings] = useState([]);
  const fetchListings = async () => {
    try {
      const url = 'https://raddaf-be.onrender.com/listing-property/get-listings';
      const response = await axios.get(url);
      const { data } = response;
      const filteredToletListings = data.filter(data => data.purpose === 'Tolet');
      console.log(filteredToletListings);
      setToletListings(filteredToletListings); 
      setLoading(false)
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);
  
  const [mainImage, setMainImage] = useState('');

  const clicktop = (imageSrc) => {
    setMainImage(imageSrc);
  };
  const [property,setproperty]=useState('')

  const handleProperty = (item) => {
    setproperty(item);
    navigate('/lettedpropertydetails', { state: { property: item } });
    console.log(item,'data')
  };

  return (
    <>
    {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />          
        </div>
      ) : (
    <div className='Forsale-con' style={{width:"100%"}}>
      {toletListings.map((data, index) => (
        <div className='forsale-sub-con' key={index}>
           <div className='forsale-img-sub-con'>
            <div className='main-img-con' onClick={() => handleProperty(data)} >
            {mainImage ? (
              <img src={mainImage} alt="Main" />
            ) : (
              data.images.length > 0 && <img src={data.images[0].Value} alt="First" />
            )}
            </div>
            <div className='sub-img-con'>
              {data.images.map((image, index) => (
                <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-hw'>
                  <img src={image.Value} alt={`Image ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className='forsale-details-sub-con'>
            <div className='forsale-details-sub'>
              <div className='price'><span>&#163; </span><span>299 PCM</span></div>
              <div className='apartment'>{data.noOfBedrooms} bedroom apartment to rent</div>
              <div className='address'>address</div>
              <div className='rooms-details'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noOfBedrooms}</div>
                <div className='bathrooms'><img src={washroom} alt='washroom'/>  {data.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {data.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {data.parkingCapacity}</div>
              </div>
            </div>
            
            <div className='buttonagenthandle'>
              <button className='button-connect' onClick={handleCallAgent}>
                Contact with agent
              </button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
      )}
    </>
  );
};

export default Tolet;
