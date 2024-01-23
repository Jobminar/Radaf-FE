import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {dimmentions} from "./propertydata.js"
import "./propertydetails.css"
import toilet from "../Profile/listing/Vector1.jpg"
import bedroomlogo from '../Forsale/images/bedsymbol.png';
import washroom from '../Forsale/images/washroom.png';
import parking from '../Forsale/images/car.png';
import MakeOffer from '../Undersale/Makeoffer.js'
import Swal from 'sweetalert2';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsIcon from '@mui/icons-material/Directions';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';

const Propertydetails = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const navigate =useNavigate()

    const location = useLocation();
    const selectedProperty = location.state ? location.state.property : null;
    console.log(selectedProperty)
    const handleClose = () => {
        setOpen(false);
      };
      const under=()=>{
        navigate("/underconstruction")
      }

    const bookview=()=>{
        navigate('/bookviewing')
    }
    const bookafree=()=>{
        navigate("/bookafreevaluation")
    }
    const [formData, setFormData] = React.useState({
        condition: '',
      });
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      const handleSubmit = async () => {
        try {
          setLoading(true);
          console.log('Form Data:', formData);
          Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully!',
            text: JSON.stringify(formData),
          });
        } catch (error) {
          setOpen(false);
          Swal.fire({
            icon: 'error',
            title: 'Form Submission Failed!',
            text: 'An unexpected error occurred. Please try again later.',
          });
          console.error('Error while sending data:', error);
        } finally {
          setOpen(false);
          setLoading(false);
        }
      };
      const makeoffer = () => {
        setOpen(true);
      };

return(
    <>
        <div>
            <div className='ma' style={{width:"100%"}}>
                <div className="gallery-container">
                    <div className="main-image">
                        <div className='imagmain' style={{backgroundSize:"cover",backgroundImage:`url(${selectedProperty.images[0].Value})`,width:"100%",height:"500px"}}>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={under}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
                                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                    </svg>Photos</button>
                            </div>
                            <div className='contaier' onClick={under} style={{ margin: '0 40px' }}>
                                <button className='container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                                    </svg>Print Details</button>
                            </div >
                            <div onClick={makeoffer} className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                                    </svg>Make Offer</button>
                            </div>
                            <div className='contaier' style={{ margin: '0 40px' }}>
                                <button className='container' onClick={under}>
                                    <svg xmlns="http://www.w3.org/2000/svg"  style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>Location</button>
                            </div>
                        </div>
                        <div className='iconsadd'>
                            <div>
                                <h1 style={{marginTop:"0px",fontSize:"32px",paddingBottom:"15px"}}>{selectedProperty.place}</h1>
                                <p style={{fontSize:"24px"}}>{selectedProperty.noOfBedrooms} Bedrooms Flat For Rent</p>
                            </div>
                            <div>
                               {/* room details */}
                            <div className='rooms-detai'>
                                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProperty.noOfBedrooms}</div>
                                <div className='bathrooms'><img src={washroom} alt='washroom'/>  {selectedProperty.noOfBathrooms}</div>
                                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProperty.noOfToilets}</div>
                                <div className='parking'><img src={parking} alt='parking'/>  {selectedProperty.parkingCapacity}</div>
                            </div>
                            <div >
                                <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",flexDirection:"column"}}>
                                    <p style={{marginTop:"20px",fontSize:"24px"}}>OIRO &pound;{selectedProperty.price}</p>
                                </div>
                                <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",flexDirection:"column"}}>
                                <button className='stabut'>Status :
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"5px"}}  width="16" height="13" fill="currentColor" class="checl bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                                    </svg> {selectedProperty.isVerified?"Verified":"Not Verified"}
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* property distaces */}
                        <div style={{marginTop:"20px",width:"50%"}}>
                            <div style={{display:"flex", justifyContent:"space-between",alignItems:'center',paddingTop:"15px"}}>
                                <div style={{display:"flex", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                               <LocalHospitalIcon/>
                                Hospitals
                                </div>
                                <div style={{display:"flex",paddingLeft:"70.4%", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
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
                                <div style={{display:"flex",paddingLeft:"73%", justifyContent:"center",alignItems:'center',columnGap:'1rem'}}>
                                 <DirectionsIcon/>  {selectedProperty.nearby.busStation.distance}
                                </div>
                            </div>
                           
                        </div>
                        <p style={{paddingTop:"40px"}}>{selectedProperty.propertyDescription}</p>
                        {/*property dimensions  */}
                        <div style={{marginTop:"20px",width:"50%"}}>
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
                                <div style={{paddingRight:"41%"}} >
                                MasterBedroom
                                </div>
                                <div>
                                {dimmentions[0].masterbedroom}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
                                <div style={{paddingRight:"50%"}}>
                                
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
                    <div className="side-images">
                    {selectedProperty.images.map((image, index) => (
                        <div key={index} style={{height:"165px",paddingBottom:"5px"}} className='sub-img-con-hw'>
                            <img src={image.Value} alt={`Image ${index}`} />
                        </div>
                    ))}

                        <div className='bokvie'>
                            <div className='bokve' onClick={bookview}>
                                <button className='love' style={{paddingLeft:"30px",paddingRight:"30px"}} >Book Viewing</button>
                            </div>
                            <div>
                                <button className='love' style={{paddingLeft:"50px",paddingRight:"50px"}} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>{selectedProperty.contactDetails.name}
                        </button>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>{selectedProperty.contactDetails.email}
                        </button>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>Book service
                        </button>
                        <button style={{marginTop:"20px",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                            </svg>0234567
                        </button>
                        <button onClick={bookafree} style={{marginTop:"20px",backgroundColor:"#9E4D00",border:"none",color:"white",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            Book A Free Valuation
                        </button>
                        <button onClick={bookafree} style={{marginTop:"20px",backgroundColor:"#9E4D00",border:"none",color:"white",borderRadius:"4px",paddingTop:"15px",paddingBottom:"15px"}}>
                            Book an Agent Appointment
                        </button>
                    </div>
                </div>
                
            </div>              
        </div>
        <MakeOffer
        open={open}
        handleClose={handleClose}
        loading={loading}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectedProperty={selectedProperty}
      />
    </>
)
  
};


export default Propertydetails ;
