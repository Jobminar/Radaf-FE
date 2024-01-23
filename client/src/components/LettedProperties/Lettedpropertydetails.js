import React from 'react'
import { useLocation } from 'react-router-dom'
import {images,dimmentions} from "./propertydata.js"
import "./propertydetails.css"
import toilet from "../Profile/listing/Vector1.jpg"
import bedroomlogo from '../Forsale/images/bedsymbol.png';
import washroom from '../Forsale/images/washroom.png';
import parking from '../Forsale/images/car.png';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsIcon from '@mui/icons-material/Directions';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';

const Propertydetails = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const agent = () => {
        navigate('/bookafreevaluation');
      };
    const selectedProperty = location.state ? location.state.property : null;
    console.log(selectedProperty)

    const lettedinspection = () => {
        navigate('/lettedinspection');
    };
    const lettedbill = () => {
        navigate('/lettedbill');
    };
    const lettedagreemetns = () => {
        navigate('/underconstruction',{ state: { property: selectedProperty } });
    };
    const lettedrepair = () => {
        navigate('/underconstruction');
    };
return(
    <>
        <div style={{fontFamily:"Roboto",marginLeft:"1.5%"}}>
            <div className='ma'>
                <div className="gallery-container">
                    <div className="main-image" style={{width:"80%"}}>
                        {/* <img className='imagmain' src={images[0].img} alt={`Image ${images[0].id}`} /> */}
                        <div className='imagmain' style={{backgroundSize:"cover",backgroundImage:`url(${selectedProperty.images[0].Value})`,width:"100%",height:"500px"}}>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={lettedagreemetns}>
                                    Agreements</button>
                            </div>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={lettedbill}>
                                    Bills & Documents</button>
                            </div >
                            <div className='conta' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={lettedinspection}>
                                    Inspections</button>
                            </div>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={lettedrepair}>
                                    Repair Request</button>
                            </div>
                        </div>
                        <div className='iconsadd'>
                            <div>
                                <h1 style={{marginTop:"0px",paddingBottom:"15px",fontSize:"32px"}}>{selectedProperty.place}</h1>
                                <p>{selectedProperty.noOfBedrooms} Bedrooms Flat For Rent</p>
                            </div>
                            <div>
                               {/* room details */}
                            <div className='rooms-detai'>
                                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProperty.noOfBedrooms}</div>
                                <div className='bathrooms'><img src={washroom} alt='washroom'/>  {selectedProperty.noOfBathrooms}</div>
                                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProperty.noOfToilets}</div>
                                <div className='parking'><img src={parking} alt='parking'/>  {selectedProperty.parkingCapacity}</div>
                            </div>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-end"}}>
                                <div>
                                <p style={{marginTop:"20px",fontSize:"24px"}}>OIRO &pound;{selectedProperty.price}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* property distaces */}
                        <div style={{marginTop:"20px",width:"45%",justifyContent:"space-around"}}>
                            <div style={{display:"flex", justifyContent:"space-between",alignItems:'center',paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                               <LocalHospitalIcon/>
                                Hospitals
                                </div>
                                <div style={{display:"flex",paddingLeft:"68%", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                <DirectionsIcon/>  {selectedProperty.nearby.hospital.distance}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                <SchoolIcon/>
                                School / Univercity
                                </div>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                <DirectionsIcon/>  {selectedProperty.nearby.school.distance}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}} >
                                    <DirectionsRailwayIcon/>
                                    Railway Station
                                </div>
                                <div style={{display:"flex",paddingLeft:"71%", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                 <DirectionsIcon/>  {selectedProperty.nearby.busStation.distance}
                                </div>
                            </div>
                           
                        </div>
                        <p style={{paddingTop:"40px"}}>{selectedProperty.propertyDescription}</p>
                        {/*property dimensions  */}
                        <div style={{marginTop:"20px",width:"40%"}}>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div>
                                Reseption
                                
                                </div>
                                <div>
                                {dimmentions[0].reseption}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div>
                                
                                Kitchen
                                </div>
                                <div>
                                {dimmentions[0].kithcen}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{paddingRight:"27%"}} >
                                MasterBedroom
                                </div>
                                <div>
                                {dimmentions[0].masterbedroom}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{paddingRight:"39%"}}>
                                
                                Bedroom
                                </div>
                                <div>
                                
                                {dimmentions[0].bedroom}
                                </div>
                            </div>                           
                        </div>
                        <h1 style={{paddingTop:"10%",color:"#626262"}}>IMPORTANT NOTICE FROM RADDAF HOMES</h1>
                        <p style={{paddingTop:"20px",color:"#626262"}}>Descriptions of the property are subjective and are used in good faith as an opinion and NOT as a statement of fact. Please make further 
                            specific enquires to ensure that our descriptions are likely to match any expectations you may have of the property. We have not tested 
                            any services, systems or appliances at this property. We strongly recommend that all the information we provide be verified by you on 
                            inspection, and by your Surveyor and Conveyancer.</p>
                    </div>
                    <div className="side-images" style={{width:"20%"}}>
                    {selectedProperty.images.map((image, index) => (
                        <div key={index} style={{height:"165px",paddingBottom:"5px"}} className='sub-img-con-hw'>
                            <img src={image.Value} alt={`Image ${index}`} />
                        </div>
                    ))}

                        
                        
                        <button onClick={agent} style={{marginTop:"0px",backgroundColor:"#9E4D00",borderRadius:"4px",paddingTop:"15px",color:"white",fontSize:"20px",paddingBottom:"15px"}}>
                            Contact Agent
                        </button>
                    </div>
                </div>
                
            </div>              
        </div>
    </>
)
  
};


export default Propertydetails ;
