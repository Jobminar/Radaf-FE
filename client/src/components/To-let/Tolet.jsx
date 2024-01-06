import React, { useState } from 'react';
import '../Forsale/Forsale.css';
import Forsaledata from '../Forsale/forsaledata';
import bedroomlogo from '../Forsale/images/bedsymbol.png';
import toilet from '../Forsale/images/toilet.png';
import washroom from '../Forsale/images/washroom.png';
import parking from '../Forsale/images/car.png';
// mui images
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';

const Tolet = () => {
  const handleCallAgent = () => {
    window.location.href = 'tel:6303364305';
  };

  const [sortedData, setSortedData] = useState(Forsaledata);

  const handlelowtohighprice = () => {
    const sorted = Forsaledata.slice().sort((a, b) => parseInt(a.price) - parseInt(b.price));
    console.log(sorted); 
    setSortedData(sorted);
  };

  return (
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
            <option className='option' value="option1" onClick={handlelowtohighprice}>Low - High</option>
            <option className='option' value="option2">High - Low</option>
          </select>
        </div>
        <div className='bedroom-filter'>
        <img src={bedroomlogo} alt='bedroomimg'/>
          <select className="mySelect">
            <option className='option' disabled selected hidden style={{ display: "none", textAlign: "center" }} value="">Bedroom</option>
            <option className='option' value="option1">Low - High</option>
            <option className='option' value="option2">High - Low</option>
          </select>
        </div>
        <div className='toilet-filter'>
          <img src={toilet} alt='bedroomimg'/>
            <select className="mySelect">
              <option className='option' disabled selected hidden style={{ display: "none", textAlign: "center" }} value="">Bathroom</option>
              <option className='option' value="option1">Low - High</option>
              <option className='option' value="option2">High - Low</option>
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

      {sortedData.map((data, index) => (
        <div className='forsale-sub-con' key={index}>
          <div className='forsale-img-sub-con'>
            <div className='main-img-con'>
              <img src={data.img[0]} alt={`img${index + 1}`} />
            </div>
            <div className='sub-img-con'>
              {data.img.slice(1).map((img, imgIndex) => (
                <img src={img} key={imgIndex} alt={`img${index + imgIndex + 2}`} />
              ))}
            </div>
          </div>
          <div className='forsale-details-sub-con'>
            <div className='forsale-details-sub'>
              <div className='price'><span>&#163; </span><span>{data.price} PCM</span></div>
              <div className='apartment'>{data.noofbedrooms} bedroom apartment to rent</div>
              <div className='address'>{data.address}</div>
              <div className='rooms-details'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noofbedrooms}</div>
                <div className='bathrooms'><img src={washroom} alt='washroom'/>  {data.noofbathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {data.nooftoilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {data.noofpraking}</div>
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
  );
};

export default Tolet;
