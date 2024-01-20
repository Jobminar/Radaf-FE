// import React from 'react'

// const Lettedagreements = () => {
//     const data=sessionStorage.getItem("user")
//     console.log(data,"kjnafejjln")
//   return (
//     <div style={{margin:"3%"}}>
//         <div style={{display:"flex"}}>
//             <div style={{width:"30%",height:"500px"}}>
//                 <div style={{borderWidth:"5px",borderColor:"green",borderStyle:"solid"}}>
//                     <h3>{data.fullname}</h3>
//                 </div>
//             </div>
//             <div style={{width:"70%"}}>
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Lettedagreements
// import React from 'react';

// const Lettedagreements = () => {
//   const data = JSON.parse(sessionStorage.getItem("user")) || {};
//   console.log(data, "kjnafejjln");

//   return (
//     <div style={{ margin: "3%" }}>
//       <div style={{ display: "flex" }}>
//         <div style={{ width: "30%", height: "500px" }}>
//           <div style={{ borderWidth: "5px", borderColor: "green", borderStyle: "solid" }}>
//             <h3>{data.fullname}</h3>
//           </div>
//         </div>
//         <div style={{ width: "70%" }}>
//           {/* Additional content or information goes here */}
//           <p>Additional Information:</p>
//           <ul>
//             <li>Email: {data.email}</li>
//             <li>Role: {data.role}</li>
//             {/* Add more properties as needed */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Lettedagreements;

import React from 'react';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import ShareIcon from '@mui/icons-material/Share';

const Lettedagreements = () => {
  const data = JSON.parse(sessionStorage.getItem("user")) || {};
  console.log(data, "kjnafejjln");
  const location = useLocation();
  const selectedProperty = location.state ? location.state.property : null;
  // console.log(selectedProperty)

  return (
    <div style={{ margin: "3%" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", height: "500px",marginRight:"1%" }}>
          <div style={{ borderWidth: "5px", borderColor: "green", borderStyle: "solid" }}>
            {/* <h3>{data.fullname}</h3> */}
            <div style={{margin:"20px"}}>
            {data.profileImage && <img src={`data:image/jpeg;base64,${data.profileImage}`} alt="User" style={{ width: "80%", height: "100px" }} />}
            <h4>Verified Email:  {data.isverified}</h4>
            {/* <h1>{selectedProperty.contactDetails.email}</h1> */}
            <h4>Verified Phone:  {data.isverified}</h4>
            <h4>{data.status}</h4>
            {/* <div>
            <button style={{display:"flex",borderRadius:"10px",width:"120px",border:"none",backgroundColor:"#0FA958",marginRight:"15px",borderStyle:"solid",padding:"7px",borderWidth:"1px"}}>
                      <div>
                          <CheckIcon/>
                      </div>
                      <div style={{paddingTop:"5px",paddingLeft:"5px"}}>
                          <h1>Verified</h1>
                      </div>
                  </button>
            </div> */}
            <div style={{marginTop:"15px",marginBottom:"15px"}}>
            {selectedProperty.isVerified?(<button style={{display:"flex",borderRadius:"10px",width:"120px",color:"white",border:"none",backgroundColor:"#0FA958",marginRight:"15px",borderStyle:"solid",padding:"7px",borderWidth:"1px"}}>
                      <div>
                          <CheckIcon/>
                      </div>
                      <div style={{paddingTop:"5px",paddingLeft:"5px"}}>
                          <h1>Verified</h1>
                      </div>
                  </button>):(<button  style={{backgroundColor:"red",padding:"15px"}}>Not Verified </button>)}
                  </div>

                  <h2>Share Profile</h2>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",marginBottom:"15px"}}>
                    <button style={{display:"flex",borderRadius:"10px",width:"120px",border:"none",backgroundColor:"",marginRight:"15px",borderStyle:"solid",padding:"7px",borderWidth:"1px"}}>
                        <div>
                            <ShareIcon/>
                        </div>
                        <div style={{paddingTop:"5px",paddingLeft:"5px"}}>
                            <h1>Share</h1>
                        </div>
                    </button>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <MailIcon/>
                  </div>
            <h4>Profile Link</h4>
            {selectedProperty.contactDetails.email}
            </div>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          {/* Additional content or information goes here */}
          <div style={{marginBottom:"15px"}}>
            <h1 style={{color:"#FE7424"}}>{data.fullname}</h1>
          </div>
          {/* <h1 style={{width:"100%",backgroundColor:"blue"}}>Personal Details</h1> */}
          <div style={{borderStyle:"solid"}}>
            <h1 style={{width:"100%",backgroundColor:"#285D8F",color:"white",padding:"20px 0px 20px"}}>Personal Details</h1>
            <div style={{padding:"15px"}}>
              <div style={{display:"flex",marginBottom:"20px"}}>
                  <div style={{display:"flex",borderRadius:"15px",marginRight:"15px",borderStyle:"solid",padding:"10px",borderWidth:"1px"}}>
                      <div>
                          <EditCalendarIcon/>
                      </div>
                      <div>
                          <h1>Edit</h1>
                      </div>
                  </div>
                  <div style={{display:"flex",borderRadius:"15px",marginRight:"15px",borderStyle:"solid",padding:"10px",borderWidth:"1px"}}>
                      <div>
                          <AddIcon/>
                      </div>
                      <div>
                          <h1>Add Photo</h1>
                      </div>
                  </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"57px"}}>
                  <h1>Biography</h1>
                </div>
                <div>
                  <h4>klnafslnlsgnkakjlh kjh ac</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"20px"}}>
                  <h1>Member Since</h1>
                </div>
                <div>
                  <h4>klnafslnlsgnkakjlh</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"110px"}}>
                  <h1>Age</h1>
                </div>
                <div>
                  <h4>klnafslnlsgnkakjlh kjh ac</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"37px"}}>
                  <h1>Employment</h1>
                </div>
                <div>
                  <h4>klnafslnlsgnkakjlh kjh ac</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"80px"}}>
                  <h1>Income</h1>
                </div>
                <div>
                  <h4>klnafslnlsgnkakjlh kjh ac</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"72px"}}>
                  <h1>Address</h1>
                </div>
                <div>
                  <h4>klnafslnlsgnkakjlh kjh ac</h4>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div style={{borderStyle:"solid",marginTop:"15px"}}>
            <h1 style={{width:"100%",backgroundColor:"#285D8F",color:"white",padding:"20px 0px 20px"}}>Verifications</h1>
            <div style={{padding:"15px"}}>
              <div style={{display:"flex",marginBottom:"15px"}}>
                  <div style={{display:"flex",borderRadius:"15px" ,marginRight:"15px",borderStyle:"solid",padding:"10px",borderWidth:"1px"}}>
                      <div>
                          <AddIcon/>
                      </div>
                      <div>
                          <h1>Verify Email</h1>
                      </div>
                  </div>
                  <div style={{display:"flex",borderRadius:"15px",marginRight:"15px",borderStyle:"solid",padding:"10px",borderWidth:"1px"}}>
                      <div>
                          <AddIcon/>
                      </div>
                      <div>
                          <h1>Verify Phone</h1>
                      </div>
                  </div>
                  <div style={{display:"flex",borderRadius:"15px",marginRight:"15px",borderStyle:"solid",padding:"10px",borderWidth:"1px"}}>
                      <div>
                          <AddIcon/>
                      </div>
                      <div>
                          <h1>Get Your ID Check</h1>
                      </div>
                  </div>
              </div>
              <h3 style={{color:"#FF0000",marginBottom:"15px"}}>Verify your email and phone number to build trust in your profile. Get an ID check to get a  <span style={{alignItems:"center"}}><button style={{backgroundColor:"#0FA958",color:"white",alignItems:"center",fontWeight:"bold",textAlign:"center",fontSize:"18px",width:"150px",padding:"10px",border:"none",borderRadius:"13px"}}><span style={{marginTop:"100px",paddingRight:"10px"}}><CheckIcon/></span>Verified</button></span> 
                    Member badge on your profile</h3>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"100px"}}>
                  <h1>Email</h1>
                </div>
                <div>
                  <h4>No</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"20px"}}>
                  <h1>Phone Number</h1>
                </div>
                <div>
                  <h4>No</h4>
                </div>
              </div>
              <div style={{display:'flex',alignItems:"center"}}>
                <div style={{paddingRight:"60px"}}>
                  <h1>Verified ID</h1>
                </div>
                <div>
                  <CheckIcon/>
                  {/* <h4>klnafslnlsgnkakjlh kjh ac</h4> */}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lettedagreements;
