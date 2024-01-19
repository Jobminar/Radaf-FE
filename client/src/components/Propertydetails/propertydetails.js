// import React from 'react'
// // import {images,dimmentions} from "./propertydata.js"
// import bed from "../Profile/listing/bed.jpg"
// import car from "../Profile/listing/car.jpg"
// import toilet from "../Profile/listing/Vector1.jpg"
// import shower from "../Profile/listing/Group.jpg"
// import bedroomlogo from '../Forsale/images/bedsymbol.png';
// // import toilet from '../Forsale/images/toilet.png';
// import washroom from '../Forsale/images/washroom.png';
// import parking from '../Forsale/images/car.png';
// // import 

// const propertydetails = () => {
  
//  return (
//     // <div className="gallery-container">
//         <div className='ma'>
//             <div className="gallery-container">
//                 <div className="main-image">
//                     {/* <img className='imagmain' src={images[0].img} alt={`Image ${images[0].id}`} /> */}
//                     <div className='imagmain' style={{backgroundImage:`url(${images[0].img})`,width:"100%"}}>
//                         <div className='contaier'>
//                             <button className='container'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
//                                     <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
//                                     <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
//                                 </svg>Photos</button>
//                         </div>
//                         <div className='contaier'>
//                             <button className='container'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
//                                     <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
//                                     <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
//                                 </svg>Print Details</button>
//                         </div >
//                         <div className='contaner'>
//                             <button className='container'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
//                                     <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
//                                     <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
//                                 </svg>Make Offer</button>
//                         </div>
//                         <div className='contaner'>
//                             <button className='container'>
//                                 <svg xmlns="http://www.w3.org/2000/svg"  style={{paddingRight:"8px"}} width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
//                                     <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
//                                     <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
//                                 </svg>Location</button>
//                         </div>
//                     </div>
//                     <div className='iconsadd'>
//                         <div>
//                             <h1 style={{marginTop:"20px",paddingBottom:"15px"}}>Clifton Road, Newbury Park, Ilford, IG2</h1>
//                             <p>3 Bedrooms Terraced For Rent</p>
//                         </div>
//                         <div>
//                             {/* <div className="iconms">
//                                 <div>
//                                     <img src={bed} alt="bed" />
//                                     </div>
//                                     <div>
//                                     <span><b>3</b></span>
//                                 </div>
//                                 <div>
//                                     <img src={shower} alt="group" />
//                                     </div>
//                                     <div>
//                                     <span><b>1</b></span>
//                                 </div>
//                                 <div>
//                                     <img src={toilet} alt="vector1" />
//                                     </div>
//                                     <div>
//                                     <span><b>3</b></span>
//                                 </div>
//                             </div> */}
//                             <div className='rooms-detai'>
//                 <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {dimmentions[0].noofbedrooms}</div>
//                 <div className='bathrooms'><img src={washroom} alt='washroom'/>  {dimmentions[0].noofbathrooms}</div>
//                 <div className='toilets'><img src={toilet} alt='toilet'/>  {dimmentions[0].nooftoilets}</div>
//                 {/* <div className='parking'><img src={parking} alt='parking'/>  {dimmentions[0].noofpraking}</div> */}
//               </div>
//                             <div>
//                             <h1 style={{marginTop:"20px"}}>OIRO $550,00</h1>
//                             <button className='stabut'>Status :
//                                 <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="checl bi bi-patch-check" viewBox="0 0 16 16">
//                                     <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
//                                     <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
//                                 </svg> 
//                             </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{marginTop:"20px",width:"50%"}}>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"15px"}} width="16" height="16" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16">
//                                 <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/>
//                                 <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"/>
//                             </svg>
//                             Hospitals
//                             </div>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-turn-right-fill" viewBox="0 0 16 16">
//                                 <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466"/>
//                             </svg>  6
//                             </div>
//                         </div>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"15px"}} width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
//                                 <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
//                                 <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
//                             </svg>
//                             School / Univercity
//                             </div>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-turn-right-fill" viewBox="0 0 16 16">
//                                 <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466"/>
//                             </svg>  6
//                             </div>
//                         </div>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div >
//                                 <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"15px"}} width="16" height="16" fill="currentColor" class="bi bi-train-front" viewBox="0 0 16 16">
//                                     <path d="M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118m5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1M4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
//                                 </svg>
//                                 Railway Station
//                             </div>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-turn-right-fill" viewBox="0 0 16 16">
//                                 <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466"/>
//                             </svg>  6
//                             </div>
//                         </div>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"70px"}}>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"15px"}} width="16" height="16" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
//                                 <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
//                                 <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
//                             </svg>
//                                 Mortage Calculator
//                             </div>
//                             <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"7px"}} width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16">
//                                 <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/>
//                             </svg>
//                             Stamp Duty
//                             </div>
//                         </div>
//                     </div>
//                     <p style={{paddingTop:"40px"}}>Home Connect Estates are pleased to present this recently renovated 3 bedroom property close to Newbury Park station. The property has been partially renovated and comes chain free. This 3 bedroom mid terrace house comes fully double glazed and has gas central heating. A perfect first family home for couple looking to upgrade. The property is close to Newbury Park Primary School and Seven Kings High School. Commuting? The property is near to Newbury Park station and gives easy acess to motorways including A12 and A406. Viewing by appointment only.</p>
//                     {/*  */}
//                     <div style={{marginTop:"20px",width:"50%"}}>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
//                             Reseption
                            
//                             </div>
//                             <div>
//                             {dimmentions[0].reseption}
//                             </div>
//                         </div>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
                            
//                             Kitchen
//                             </div>
//                             <div>
//                             {dimmentions[0].kithcen}
//                             </div>
//                         </div>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div >
//                             MasterBedroom
//                             </div>
//                             <div>
//                             {dimmentions[0].masterbedroom}
//                             </div>
//                         </div>
//                         <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
                            
//                             Bedroom
//                             </div>
//                             <div>
                            
//                             {dimmentions[0].bedroom}
//                             </div>
//                         </div>
//                         {/* <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
                            
//                                 Letting Services
//                             </div>
//                             <div style={{paddingLeft:"30%"}}>
                            
//                                 Home connect estates offer rent guarantee and management schemes should 
//                                 you decide to let your property. If you are looking to make an investment or, are 
//                                 looking for someone to manage your portfolio, feel free to speak to one of our 
//                                 staff and we will schedule an appointment and go through the best available 
//                                 options.
//                             </div>
//                         </div> */}
//                     </div>
//                     {/* <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
                            
//                                 Letting Services
//                             </div>
//                             <div style={{paddingLeft:"15%"}}>
                            
//                                 Home connect estates offer rent guarantee and management schemes should 
//                                 you decide to let your property. If you are looking to make an investment or, are 
//                                 looking for someone to manage your portfolio, feel free to speak to one of our 
//                                 staff and we will schedule an appointment and go through the best available 
//                                 options.
//                             </div>
//                     </div>
//                     <div style={{display:"flex", justifyContent:"space-between",paddingTop:"15px"}}>
//                             <div>
                            
//                                 Money Laundering Regulations
//                             </div>
//                             <div style={{paddingLeft:"15%"}}>
                            
//                                 Buyers will be asked to produce identification documents.
//                             </div>
//                     </div> */}
//                     <div className='iconsadd'>
//                         <div>
//                             <p style={{marginTop:"20px",paddingBottom:"15px"}}>Letting Serivices</p>
//                             {/* <p>3 Bedrooms Terraced For Rent</p> */}
//                         </div>
//                         <div>
//                             <div className="icon" style={{paddingLeft:"22%"}}>
//                                 <div>
//                                 Home connect estates offer rent guarantee and management schemes should 
//                                 you decide to let your property. If you are looking to make an investment or, are 
//                                 looking for someone to manage your portfolio, feel free to speak to one of our 
//                                 staff and we will schedule an appointment and go through the best available 
//                                 options.
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                     <div className='iconsadd'  style={{marginTop:"20px",width:"50%"}}>
//                         <div>
//                             <p style={{marginTop:"20px",paddingBottom:"15px"}}>Money Laundering</p>
//                             {/* <p>3 Bedrooms Terraced For Rent</p> */}
//                         </div>
//                         <div>
//                             <div className="icon" style={{paddingLeft:"40%"}}>
//                                 <div>
//                                 Buyers will be asked to produce identification documents.
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                     <h1 style={{paddingTop:"10%",color:"#626262"}}>IMPORTANT NOTICE FROM RADDAF HOMES</h1>
//                     <p style={{paddingTop:"20px",color:"#626262"}}>Descriptions of the property are subjective and are used in good faith as an opinion and NOT as a statement of fact. Please make further 
// specific enquires to ensure that our descriptions are likely to match any expectations you may have of the property. We have not tested 
// any services, systems or appliances at this property. We strongly recommend that all the information we provide be verified by you on 
// inspection, and by your Surveyor and Conveyancer.</p>
//                 </div>
//                 <div className="side-images">
//                     {images.slice(1).map(image => (
//                     <img key={image.id} className='simages' src={image.img} alt={`Image ${image.id}`} />
//                     ))}
//                     <div className='bokvie'>
//                         <div className='bokve'>
//                             <button className='love' style={{paddingLeft:"30px",paddingRight:"30px"}} >Book Viewing</button>
//                         </div>
//                         <div>
//                             <button className='love' style={{paddingLeft:"50px",paddingRight:"50px"}} >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
//                                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                     <button style={{marginTop:"20px",borderRadius:"15px",paddingTop:"15px",paddingBottom:"15px"}}>
//                         <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
//                             <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
//                         </svg>0234567
//                     </button>
//                     <button style={{marginTop:"20px",borderRadius:"15px",paddingTop:"15px",paddingBottom:"15px"}}>
//                         <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
//                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
//                         </svg>0234567
//                     </button>
//                     <button style={{marginTop:"20px",borderRadius:"15px",paddingTop:"15px",paddingBottom:"15px"}}>
//                         <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
//                             <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
//                             <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
//                         </svg>0234567
//                     </button>
//                     <button style={{marginTop:"20px",borderRadius:"15px",paddingTop:"15px",paddingBottom:"15px"}}>
//                         <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"20px"}} width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
//                             <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
//                         </svg>0234567
//                     </button>
//                     <button style={{marginTop:"20px",backgroundColor:"#9E4D00",border:"none",color:"white",borderRadius:"15px",paddingTop:"15px",paddingBottom:"15px"}}>
//                         Book A Free Valuation
//                     </button>
//                     <button style={{marginTop:"20px",backgroundColor:"#9E4D00",border:"none",color:"white",borderRadius:"15px",paddingTop:"15px",paddingBottom:"15px"}}>
//                         Book an Agent Appointment
//                     </button>
//                 </div>
//             </div>
            
//         </div>
//   );
// }


// export default propertydetails