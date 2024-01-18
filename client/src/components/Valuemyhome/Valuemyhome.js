import React, { useState } from 'react'
import "./Valuemyhome.css"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Swal from "sweetalert2";

const Valuemyhome = () => {
  const [loading, setLoading] = useState(false);
    const [formData, setFormData]=useState({
        firstName:"",
        lastName:"",
        emailAddress:"",
        contactNumber:"",
        postCode:"",
        address:"",
        propertyAction:"",
        timing:"",
        additionalMessage:"",
        bestWayToContact:"",
        bestTimeToContact:""
    })

    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const submitForm = async () => {
        try {
          setLoading(true)
            console.log(formData)
          const response = await axios.post('https://raddaf-be.onrender.com/evalRequests', formData);
          if (response.status===201){
            // setShowPopup(true);
            Swal.fire({
              icon: 'success',
              title: 'Form Submitted Successfully!',
              text: 'Thank you for submitting your details. A confirmation will be sent to your provided email address shortly. Rest assured; we value your privacy. In accordance with GDPR guidelines, only your name and contact number will be shared with our selected agents. They will reach out to you regarding your property valuation. Have a great day!',
            });
          }
          else{
            alert("add details on all fileds")
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Form Submission Failed!',
            text: 'Please try again later.',
          });
          console.error('Error submitting form data', error);
        } finally {
          setLoading(false); // Set loading to false after API call is complete (success or failure)
      }
      };
    return (
    <div className='maincoos'>
        <center className='mainco'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator calimage" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <h1>Instant Online Valuation</h1>
                <p>The simple, free, no-obligation way to request an accurate valuation of your home from estate and letting agents who are experts in your local areas</p>
        
        <div className='cal'>
            <button className='bb1'>Agent Valuation</button>
            <div>
                <input className='inp' onChange={handleInputChange} value={formData.firstName} name='firstName' type="text" placeholder="FIRST NAME" /><br/>
                <input className='inp' onChange={handleInputChange} value={formData.lastName} name='lastName' type="text" placeholder="LAST NAME" /><br/>
                <input className='inp' onChange={handleInputChange} value={formData.emailAddress} name='emailAddress' type="text" placeholder="EMAIL ADDRESS" /><br/>
                <input className='inp'  onChange={handleInputChange} value={formData.contactNumber} name='contactNumber' type="text" placeholder="CONTACT NUMBER" /><br/>
                <input className='inp'  onChange={handleInputChange} value={formData.postCode} name='postCode' type="text" placeholder="POST CODE" /><br/>
                <input className='inp' onChange={handleInputChange} value={formData.address} name='address' type="text" placeholder="ADDRESS" /><br/>
                <select className='inp' value={formData.propertyAction} name='propertyAction' onChange={handleInputChange} >
                {/* // onChange={(e) => setFormData({ ...formData, todo: e.target.value })}> */}
                    <option value="" disabled>WHAT WOULD YOU LIKE TO DO</option>
                    <option value="SELL">SELL MY PROPERTY</option>
                    <option value="LET">LET MY PROPERTY</option>
                    <option value="CURIOUS">JUST CURIOUS</option>
                    <option value="REMORTGAGING">REMORTGAGING / RENOVATION / PURCHASING</option>
                </select>
                <select className='inp' name='timing' onChange={handleInputChange} value={formData.timing}  >
                {/* // onChange={(e) => setFormData({ ...formData, sellproperty: e.target.value })}> */}
                    <option value="" disabled>WHEN WOULD YOU LIKE TO SELL PROPERTY</option>
                    <option value="0-3 MONTHS">0 - 3 MONTHS</option>
                    <option value="3-6 MONTHS">3 - 6 MONTHS</option>
                    <option value="6+ MONTHS">6+ MONTHS</option>
                </select>
                
                <input className='inp' onChange={handleInputChange} value={formData.additionalMessage} name='additionalMessage' type="text" placeholder="MESSAGE (OPTIONAL)" /><br/>
                <select className='inp' value={formData.bestWayToContact} onChange={handleInputChange} name='bestWayToContact' >
                {/* //  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}> */}
                    <option value="" disabled>BEST WAY TO CONTACT YOU (OPTIONAL)</option>
                    <option value="EMAIL">EMAIL</option>
                    <option value="PHONE">PHONE</option>
                    <option value="EITHER">EITHER</option>
                </select>
                <select className='inp' name='bestTimeToContact' onChange={handleInputChange} value={formData.bestTimeToContact} >
                {/* //  onChange={(e) => setFormData({ ...formData, besttime: e.target.value })}> */}
                    <option value="" disabled>BEST TIME TO CONTACT YOU (OTIPNAL)</option>
                    <option value="MORNING">MORNING</option>
                    <option value="AFTERNOON">AFTERNOON</option>
                    <option value="EVENING">EVENING</option>
                    <option value="ANYTIME">ANY TIME</option>
                </select>
                <center className=''>
                    <button className='bb2' onClick={submitForm}>{loading ? <CircularProgress size={20} /> : 'SUBMIT'}</button>
                </center>
            </div>
            
        </div>
        {showPopup && (
        <div className="custom-popup">
          <p>
            Thank you for submitting your details. A confirmation will be sent to your provided email address shortly.
            Rest assured; we value your privacy. In accordance with GDPR guidelines, only your name and contact number
            will be shared with our selected agents. They will reach out to you regarding your property valuation.
            Have a great day!
          </p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
        </center>
    </div>
  )
}



export default Valuemyhome
