import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Forsale.css';
import bedroomlogo from './images/bedsymbol.png';
import toilet from './images/toilet.png';
import washroom from './images/washroom.png';
import parking from './images/car.png';
import { useNavigate } from 'react-router-dom';
// mui images
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Forsale = () => {
  const navigate = useNavigate()
  const handleCallAgent = () => {
    window.location.href = 'tel:6303364305';
  };
  
  const [saleListings, setSaleListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchListings = async () => {
    try {
      const url = 'https://raddaf-be.onrender.com/listing-property/get-listings';
      const response = await axios.get(url);
      const { data } = response;
      const filteredToletListings = data.filter(data => data.purpose === 'Sale');
      console.log(filteredToletListings);
      setSaleListings(filteredToletListings); 
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      // Set loading to false after fetching data, with a delay of 3 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }
}
  

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
    navigate('/propertydetails', { state: { property: item } });
    console.log(item,'data')
  };

  // favourite
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  const toggleFavorite = (itemId) => {
    setFavoriteProperties((prevFavorites) => {
      if (prevFavorites.includes(itemId)) {
        return prevFavorites.filter((id) => id !== itemId);
      } else {
        return [...prevFavorites, itemId];
      }
    });
  };

  return (

    <>

      {loading ? (
        // Render loading spinner while data is being fetched
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
          
        </div>
      ) : (

    <div className='Forsale-con'>
      <div className='filter-section'>
        <div className='pincode-filter'>
          <AddLocationAltOutlinedIcon />
          <input type='text' placeholder='Manchester' />
        </div>
        <div className='price-filter'>
          <span style={{ fontSize: '24px' }}>&#163; </span>
          <select className="mySelect">
            <option className='option' disabled selected hidden style={{ display: "none", textAlign: "center" }} value="">Price</option>
            <option className='option' value="option1">1000 - 2000</option>
            <option className='option' value="option2">2000 - 3000</option>
            <option className='option' value="option1">3000 - 4000</option>
            <option className='option' value="option2">4000 - 5000</option>
            <option className='option' value="option2">5000 - more</option>
          </select>
        </div>
        <div className='bedroom-filter'>
        <img src={bedroomlogo} alt='bedroomimg'/>
          <select className="mySelect">
            <option className='option' disabled selected hidden style={{ display: "none", textAlign: "center" }} value="">Bedroom</option>
            <option className='option' value="option1">1</option>
            <option className='option' value="option2">2</option>
            <option className='option' value="option1">3</option>
            <option className='option' value="option2">4</option>
            <option className='option' value="option2">4+</option>
          </select>
        </div>
        <div className='toilet-filter'>
          <img src={toilet} alt='bedroomimg'/>
            <select className="mySelect">
              <option className='option' disabled selected hidden style={{ display: "none", textAlign: "center" }} value="">Bathroom</option>
              <option className='option' value="option1">1</option>
              <option className='option' value="option2">2</option>
              <option className='option' value="option1">3</option>
              <option className='option' value="option2">4</option>
              <option className='option' value="option2">4+</option>
            </select>
        </div>
        <div className='property-filter'>
          <HouseOutlinedIcon style={{fontSize:'38px'}}/>
          <select className="mySelect">
              <option className='option' disabled selected hidden style={{ display: "none", textAlign: "center" }} value="">Property type</option>
              <option className='option' value="option1">Residential</option>
              <option className='option' value="option2">Commercial</option>
            </select>
        </div>
      </div>

      {saleListings.map((data, index) => (
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
              <div className='pricehouse'><span>&#163; </span><span>299 PCM</span></div>
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
            <div style={{ fontSize: '80px', color: favoriteProperties.includes(data.id) ? 'red' : 'black' }} onClick={() => toggleFavorite(data.id)}>
                  {favoriteProperties.includes(data.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
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

export default Forsale;
