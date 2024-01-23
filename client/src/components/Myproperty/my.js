import React, { useEffect, useState } from 'react';
import "./Myproperty.css";
import toilet from "../Profile/listing/Vector1.jpg"
import imag from "../Profile/MyViewing/Frame1.jpg"
import { useNavigate } from 'react-router-dom';
import bedroomlogo from '../Forsale/images/bedsymbol.png';
import washroom from '../Forsale/images/washroom.png';
import parking from '../Forsale/images/car.png';
import Tolet from '../To-let/Tolet';
import Forsale from '../Forsale/Forsale';
import CircularProgress from '@mui/material/CircularProgress';


const SampleComponent = ({ data }) => {
  const navigate = useNavigate()
  const [mainImage, setMainImage] = useState('');
  const [property,setproperty]=useState('')
  const handleProperty = (item) => {
    setproperty(item);
    navigate('/propertydetails', { state: { property: item } });
    console.log(item,'data')
  };
  return (
    <div style={{borderRadius:"20px"}} className='mains'>
      <div className='profile-ent'>
      {/* {data.images.map((image, index) => (
          <img style={{height:"65px"}} key={index} src={image.Value} alt={`Image ${index}`} className="sample-image" />
        ))} */}
        {mainImage ? (
              <img src={mainImage} alt="Main" />
            ) : (
              data.images.length > 0 && <img style={{height:"200px",borderRadius:"15px"}} src={data.images[0].Value} alt="First" />
            )}
        {/* <img src={data.images[0].Value} alt="First" /> */}
        
        {/* <img key={data.images} src={data.images[1].Value}  alt="Sample" className="sample-image" /> */}
        <div className='incont'>
          <div className='nn'>
            <h3>{data.id}</h3> 
          </div>
          <div className='nn'>
            <h3>{data.place}</h3>
          </div>
          <div className='nn'>
            <h3>{data.purpose}  {data.price}</h3>
            
                <div className="iconm"  style={{display:"flex"}}>
                  
                  <div className='rooms-detai'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noOfBedrooms}</div>
                <div className='bahrooms'><img src={washroom} alt='washroom'/>  {data.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {data.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {data.parkingCapacity}</div>
              </div>

                
                </div>
               


          </div>
            <div  className='btnn'>
                <svg xmlns="http://www.w3.org/2000/svg" className='hicon' width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>
                    <button onClick={() => handleProperty(data)} className='btnn'>Property Details</button>
            </div>
        </div>
      </div>
    </div>
  );
};

const Myproperty = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {loading ? (
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    ) : (
    <div className='mainco'>
      
      <div className='row-container'>
        
        {listings.map((data) => (
          <SampleComponent key={data.id} data={data} />
        ))}
        {/* <img src={listings.images.Value}/> */}
      </div>
    </div>
    )
        }
  
  </>
  )
};

export default Myproperty;