import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
import EastIcon from '@mui/icons-material/East';
import { Link, useNavigate } from 'react-router-dom';

const Bookafreevaluation = () => {
    const navigate=useNavigate()

    const instantvaluation=()=>{
        navigate("/valuemyhome")
    }
    const bookviewing=()=>{
        navigate("/bookviewing")
    }
    
  return (
    <div style={{fontFamily:"Roboto"}}>
        <center>
            Request A Property Valuation
        </center>
        <div style={{display:"flex",justifyContent:"space-between",margin:"5%"}}>
            <div style={{borderStyle:"solid",borderRadius:"10px", width:"30%",height:"60%"}}>
                <center style={{padding:"10px  20px 70px 20px"}}>
                    <div style={{backgroundColor:"#F6C677",margin:"20px",borderRadius:"50%",width:"175px",height:"175px",alignItems:"center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="160" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </div>
                    <h1>Online Valuation</h1>
                    <p>Find out what your property is worth in just 60 seconds</p>
                </center>
                <div onClick={instantvaluation} style={{backgroundColor:"#F6C677",borderRadius:"3px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",margin:"3px"}}>
                    <div style={{fontSize:"24px",fontWeight:"bold"}}>
                        Instant Valuation
                    </div>
                    <div>
                        <EastIcon/>
                    </div>
                </div>
            </div>
            <div style={{borderStyle:"solid",borderRadius:"10px",width:"30%",height:"60%"}}>
                <center style={{padding:"10px  20px 50px 20px"}}>
                    <div style={{backgroundColor:"#F6C677",margin:"20px",borderRadius:"50%",width:"175px",height:"175px",alignItems:"center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="160" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                    </div>
                    <h1>Book A Valuation</h1>
                    <p>Just enter your details and we will arrange to pop round and give you an accurate appraisal of your property at a time convenient to you.</p>
                </center>
                <div onClick={bookviewing}  style={{backgroundColor:"#F6C677",borderRadius:"3px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",margin:"3px"}}>
                    <div style={{fontSize:"24px",fontWeight:"bold"}}>
                        Book Viewing
                    </div>
                    <div>
                        <EastIcon/>
                    </div>
                </div>
            </div>
            <div style={{borderStyle:"solid",borderRadius:"10px",width:"30%",height:"60%"}}>
                <center style={{padding:"10px  20px 90px 20px"}}>
                    <div style={{backgroundColor:"#F6C677",margin:"20px",borderRadius:"50%",width:"175px",height:"175px",alignItems:"center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="160" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                    </div>
                    <h1>By Phone</h1>
                    <p>We like to talk, please call our office: 02034567812 </p>
                </center>
                
                <div style={{backgroundColor:"#F6C677",borderRadius:"3px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",margin:"3px"}}>
                    <div style={{fontSize:"24px",fontWeight:"bold"}} >
                        Call Us
                    </div>
                    <div>
                        <EastIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bookafreevaluation