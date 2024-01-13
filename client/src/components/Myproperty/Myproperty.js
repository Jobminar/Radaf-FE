// import React, { useEffect, useState } from 'react';
// import "./Myproperty.css";
// import toilet from "../Profile/listing/Vector1.jpg"
// import imag from "../Profile/MyViewing/Frame1.jpg"
// import { useNavigate } from 'react-router-dom';
// import bedroomlogo from '../Forsale/images/bedsymbol.png';
// import washroom from '../Forsale/images/washroom.png';
// import parking from '../Forsale/images/car.png';
// import Tolet from '../To-let/Tolet';
// import Forsale from '../Forsale/Forsale';

// const SampleComponent = ({ data }) => {
//   const navigate = useNavigate()
//   const [property,setproperty]=useState('')
//   const handleProperty = (item) => {
//     setproperty(item);
//     navigate('/propertydetails', { state: { property: item } });
//     console.log(item,'data')
//   };
//   return (
//     <div className='mains'>
//       <div className='profile-ent'>
//         <img src={imag} alt="Sample" className="sample-image" />
//         <div className='incont'>
//           <div className='nn'>
//             <h3>{data.id}</h3> 
//           </div>
//           <div className='nn'>
//             <h3>{data.place}</h3>
//           </div>
//           <div className='nn'>
//             <h3>{data.purpose}  {data.price}</h3>
            
//                 <div className="iconm"  style={{display:"flex"}}>
                  
//                   <div className='rooms-detai'>
//                 <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {data.noOfBedrooms}</div>
//                 <div className='bahrooms'><img src={washroom} alt='washroom'/>  {data.noOfBathrooms}</div>
//                 <div className='toilets'><img src={toilet} alt='toilet'/>  {data.noOfToilets}</div>
//                 <div className='parking'><img src={parking} alt='parking'/>  {data.parkingCapacity}</div>
//               </div>

                
//                 </div>
               


//           </div>
//             <div  className='btnn'>
//                 <svg xmlns="http://www.w3.org/2000/svg" className='hicon' width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
//                     <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
//                 </svg>
//                     <button onClick={() => handleProperty(data)} className='btnn'>Property Details</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Myproperty = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [listings, setListings] = useState([]);

//   let content;

//   switch (selectedOption) {
//     case 'Letted Properties':
//       // Render specific component for 'Letted Properties'
//       content = <Tolet />;
//       break;
//     case 'Letting Properties':
//       // Render specific component for 'Letting Properties'
//       content = <Tolet />;
//       break;
//     case 'Properties under sale':
//       // Render specific component for 'Properties under sale'
//       content = <Forsale />;
//       break;
//     default:
//       content = <div>No option selected</div>;
//   }
//   // Options for the dropdown
//   const options = [
//     'Letted Properties',
//     'Letting Properties',
//     'Properties under sale',
//   ];

//   // Event handler for option selection
//   const handleSelect = (option) => {
//     setSelectedOption(option);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://raddaf-be.onrender.com/listing-property/get-listings');
//         const data = await response.json();
//         setListings(data); // Update the state with fetched data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='mainco'>
//       <h3>Filters: {selectedOption}</h3>
//       <select
//         value={selectedOption}
//         onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",border:"none",width:"15%",padding:"20px",fontSize:"18px"}}
//       >
//         <option value="">My Properties</option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <div className='row-container'>
//         {listings.map((data) => (
//           <SampleComponent key={data.id} data={data} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Myproperty;

import React, { useEffect, useState } from 'react';
import "./Myproperty.css";
import toilet from "../Profile/listing/Vector1.jpg"
import imag from "../Profile/MyViewing/Frame1.jpg"
import { useNavigate } from 'react-router-dom';
import bedroomlogo from '../Forsale/images/bedsymbol.png';
import washroom from '../Forsale/images/washroom.png';
import parking from '../Forsale/images/car.png';
import Tolet from '../LettingProperties/Lettingproperties.js';
import Forsale from '../Undersale/Undersale.js';
import Myprop from "./my.js"

const SampleComponent = ({ data }) => {
  const navigate = useNavigate()
  const [property, setproperty] = useState('')
  const handleProperty = (item) => {
    setproperty(item);
    navigate('/propertydetails', { state: { property: item } });
    console.log(item, 'data')
  };
  return (
    <div className='mains'>
      <div className='profile-ent'>
        <img src={imag} alt="Sample" className="sample-image" />
        <div className='incont'>
          <div className='nn'>
            <h3>{data.id}</h3>
          </div>
          <div className='nn'>
            <h3>{data.place}</h3>
          </div>
          <div className='nn'>
            <h3>{data.purpose} {data.price}</h3>

            <div className="iconm" style={{ display: "flex" }}>

              <div className='rooms-detai'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo' />  {data.noOfBedrooms}</div>
                <div className='bahrooms'><img src={washroom} alt='washroom' />  {data.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet' />  {data.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking' />  {data.parkingCapacity}</div>
              </div>

            </div>
            <div className='btnn'>
              <svg xmlns="http://www.w3.org/2000/svg" className='hicon' width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>
              <button onClick={() => handleProperty(data)} className='btnn'>Property Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Myproperty = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [listings, setListings] = useState([]);

  let content;

  switch (selectedOption) {
    case 'Letted Properties':
      content=<Myprop/>
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mainco'>
      <h3>Filters: {selectedOption}</h3>
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)} style={{ background: "#BE6B2E", border: "none", width: "15%", padding: "20px", fontSize: "18px",borderRadius:"20px",marginTop:"20px" }}
      >
        <option value="">My Properties</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='row-container'>
        {content}
      </div>
    </div>
  );
};

export default Myproperty;
