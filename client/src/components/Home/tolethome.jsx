import './forsalehome.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import toiletlogo from './Images/toilet-logo.png'
import bedroomlogo from './Images/bedsymbol.png'
import washroomlogo from './Images/washroom.png'
import parkinglogo from './Images/car.png'

const Tolethome = () => {
    const [saleListings, setSaleListings] = useState([]);
    const navigate = useNavigate()
    const fetchListings = async () => {
        try {
            const url = 'https://raddaf-be.onrender.com/listing-property/get-listings';
            const response = await axios.get(url);
            const { data } = response;
            const filteredToletListings = data.filter(data => data.purpose === 'Tolet');
            console.log(filteredToletListings);
            setSaleListings(filteredToletListings); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchListings();
    }, []);
      
     
     
    // send data
  const [property,setproperty]=useState('')

  const handleProperty = (item) => {
    setproperty(item);
    navigate('/propertydetails', { state: { property: item } });
    console.log(item,'data')
  };

    return (
        <>
            <h1 className='sale-head'>To-let</h1>
            <div className="forsalehome-con">
                {saleListings.slice(0, 3).map((listing, index) => (
                    <div key={index} className='forsalesub-con'>
                        <div className='sale-image' onClick={() => handleProperty(listing)} >
                            <img src={listing.images[0]?.Value} alt={`main-img-${index}`} />
                        </div>
                        <div className='sale-details'>
                            <div className='home-sale-price'>
                                <span>&#163; {listing.price}</span>
                            </div>
                            <div className='home-sale-bedroom'>
                                <span>{listing.noOfBedrooms} bedroom flat for sale</span>
                            </div>
                            <div className='home-sale-address'>
                                <span>{listing.place}</span>
                            </div>
                        </div>
                        <div className='forsale-home-rooms'>
                            <div>
                                <img src={bedroomlogo} alt='bedroom' />
                                <span>{listing.noOfBedrooms}</span>
                            </div>
                            <div>
                                <img src={washroomlogo} alt='washroom' />
                                <span>{listing.noOfBathrooms}</span>
                            </div>
                            <div>
                                <img src={toiletlogo} alt='washroom' />
                                <span>{listing.noOfToilets}</span>
                            </div>
                            <div>
                                <img src={parkinglogo} alt='washroom' />
                                <span>{listing.parkingCapacity}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 style={{ display: 'flex', justifyContent:'right',alignItems: 'center' }} className='showmoreproperty' onClick={()=>{navigate('/tolet')}}>
                    Show More Tolet Properties
                    <ArrowCircleRightRoundedIcon style={{ fontSize: '30px', marginLeft: '5px' }} />
            </h1> 

        </>
    );
};

export default Tolethome;
