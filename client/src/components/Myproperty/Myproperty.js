// // import React, { useState } from 'react'
// // import "./Myproperty.css"

// // const Myproperty = () => {
// //     const [selectedOption, setSelectedOption] = useState(null);

// //     // Options for the dropdown
// //     const options = [
// //       'Letted Properties',
// //       'Letting Properties',
// //       'Properties under sale',
// //     ];
  
// //     // Event handler for option selection
// //     const handleSelect = (option) => {
// //       setSelectedOption(option);
// //     };
  
// //     return (
// //       <div className='mainco'>
// //         <h3>Filters: {selectedOption}</h3>
// //         <select
// //           value={selectedOption}
// //           onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",border:"none",width:"15%",padding:"20px",fontSize:"18px"}}
// //         >
// //           <option value="">My Properties</option>
// //           {options.map((option, index) => (
// //             <option key={index} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
// //         <div>

// //         </div>
// //       </div>
// //     );
// //   };

// // export default Myproperty

// import React, { useState } from 'react';
// import "./Myproperty.css";
// import da from './da.js'; // Make sure to import your data file

// const SampleComponent = ({ data }) => {
//   return (
//     <div key={data.id} className='mains'>
//       <div className='profile-ent'>
//         <img src="your_sample_image_url.jpg" alt="Sample" className="sample-image" />
//         <div className='incont'>
//           <div className='nn'>
//             <h1 className='headi'>ID</h1>
//             <h3>{data.id}</h3>
//           </div>
//           <div className='nn'>
//             <h1>Address</h1>
//             <h3>{data.address}</h3>
//           </div>
//           <div className='nn'>
//             <h1>Price</h1>
//             <h3>{data.price}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Myproperty = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

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
//       <div>
//         {da.map((data) => (
//           <SampleComponent key={data.id} data={data} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Myproperty;


import React, { useState } from 'react';
import "./Myproperty.css";
import bed from "../Profile/listing/bed.jpg"
import car from "../Profile/listing/car.jpg"
import toilet from "../Profile/listing/Vector1.jpg"
import shower from "../Profile/listing/Group.jpg"
import da from './da.js'; // Make sure to import your data file
import imag from "../Profile/MyViewing/Frame1.jpg"
import { Link } from 'react-router-dom';

const SampleComponent = ({ data }) => {
  return (
    <div className='mains'>
      <div className='profile-ent'>
        <img src={imag} alt="Sample" className="sample-image" />
        <div className='incont'>
          <div className='nn'>
            {/* <h1 className='headi'>ID</h1> */}
            <h3>{data.id}</h3>
          </div>
          <div className='nn'>
            {/* <h1>Address</h1> */}
            <h3>{data.address}</h3>
          </div>
          <div className='nn'>
            {/* <h1>Price</h1> */}
            <h3>{data.price}</h3>
            {/* <div>
                <car/>
            </div> */}

                <div className="icon">
                <div>
                  <img src={bed} alt="bed" />
                   <span><b>3</b></span>
                </div>
                <div>
                  <img src={shower} alt="group" />
                  <span><b>1</b></span>
                </div>
                <div>
                  <img src={toilet} alt="vector1" />
                  <span><b>3</b></span>
                </div>
                <div>
                  <img src={car} alt="car" />
                  <span><b>2</b></span>
                </div>

                {/* <div> */}
                  {/* <img src={share} alt="share" /> */}
                {/* </div> */}
                </div>
                {/* <div>
                    <button>Property Details</button>
                </div> */}


          </div>
            <div  className='btnn'>
                <svg xmlns="http://www.w3.org/2000/svg" className='hicon' width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>
                    <Link to="/propertydetails"><button  className='btnn'>Property Details</button></Link>
                    {/* <img src={bed} alt="bed" /> */}
            </div>
        </div>
      </div>
    </div>
  );
};

const Myproperty = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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

  return (
    <div className='mainco'>
      <h3>Filters: {selectedOption}</h3>
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",border:"none",width:"15%",padding:"20px",fontSize:"18px"}}
      >
        <option value="">My Properties</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='row-container'>
        {da.map((data) => (
          <SampleComponent key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Myproperty;
