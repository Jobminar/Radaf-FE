import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../MyViewing/viewpage.css'
import bedroomlogo from '../MyViewing/images/bedsymbol.png'
import toilet from '../MyViewing/images/toilet.png'
import washroom from '../MyViewing/images/washroom.png'
import parking from '../MyViewing/images/car.png'
import { useNavigate } from 'react-router-dom';

const Viewpage = () => {
  const navigate=useNavigate()

  const handleCallAgent = () => {
    window.location.href = 'tel:6303364305';
  };

  const handleProperty = (item) => {
    // setproperty(item);
    navigate('/underconstruction', { state: { property: item } });
    console.log(item,'data')
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
    <div className='Forsale-con2'>
    
     

          <div className="head2">
         <h1>My Viewing</h1>
         <p className="p">upcoming viewing</p>
         <p className="p">23rd March 2024, 1:32pm</p>
        

      </div>

      {saleListings.map((data, index) => (
        <div className='forsale-sub-con2' key={index}>
          <div className='forsale-img-sub-con2'>
          <div className='main-img-con2' onClick={() => handleProperty(data)}>
          {mainImage ? (
            <img src={mainImage} alt="Main" />
          ) : (
            data.images.length > 0 && <img src={data.images[0].Value} alt="First" />
          )}
          </div>
          <div className='sub-img-con2'>
            {data.images.map((image, index) => (
              <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-hw2'>
                <img src={image.Value} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
         </div>
          <div className='forsale-details-sub-con2'>
            <div className='forsale-details-sub2'>
              <div className='price2'><span>&#163; </span><span>299 PCM</span></div>
              <div className='apartment2'>{data.noOfBedrooms} bedroom apartment to rent</div>
              <div className='address2'>address</div>
              <div className='rooms-details2'>
                <div className='noofbedrooms2'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noOfBedrooms}</div>
                <div className='bathrooms2'><img src={washroom} alt='washroom'/>  {data.noOfBathrooms}</div>
                <div className='toilets2'><img src={toilet} alt='toilet'/>  {data.noOfToilets}</div>
                <div className='parking2'><img src={parking} alt='parking'/>  {data.parkingCapacity}</div>
              </div>
            </div>
            <div className='buttonagenthandle2'>
              <button className='button-connect2' onClick={handleCallAgent}>
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
