import React, { useState } from 'react'
import "./Valuemyhome.css"
// import axios from "axios"



const Valuemyhome = () => {
    const [formData, setFormData]=useState({
        firstname:"",
        lastname:"",
        emailaddress:"",
        constactnumber:"",
        address:"",
        todo:"",
        sellproperty:"",
        message:"",
        contact:"",
        besttime:""

    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const submitForm = async () => {
        try {
            console.log(formData)
          // Replace 'http://your-api-endpoint' with your actual API endpoint

        //   const response = await axios.post('http://your-api-endpoint', formData);
    
        //   if (response.status === 200) {
        //     console.log('Form data submitted successfully');
        //     // Optionally, you can reset the form after successful submission
        //     setFormData({
        //       firstname: '',
        //       lastname: '',
        //       emailaddress: '',
        //       contactnumber: '',
        //       address: '',
        //       todo: '', // reset the todo field
        //     });
        //   } else {
        //     console.error('Failed to submit form data');
        //   }
        } catch (error) {
          console.error('Error submitting form data', error);
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
                <input className='inp' onChange={handleInputChange} value={formData.firstname} name='firstname' type="text" placeholder="FIRST NAME" /><br/>
                <input className='inp' onChange={handleInputChange} value={formData.lastname} name='lastname' type="text" placeholder="LAST NAME" /><br/>
                <input className='inp' onChange={handleInputChange} value={formData.emailaddress} name='emailaddress' type="text" placeholder="EMAIL ADDRESS" /><br/>
                <input className='inp'  onChange={handleInputChange} value={formData.constactnumber} name='constactnumber' type="text" placeholder="CONTACT NUMBER" /><br/>
                <input className='inp' onChange={handleInputChange} value={formData.address} name='address' type="text" placeholder="ADDRESS" /><br/>
                <select className='inp' value={formData.todo} name='todo' onChange={handleInputChange} >
                {/* // onChange={(e) => setFormData({ ...formData, todo: e.target.value })}> */}
                    <option value="" disabled>WHAT WOULD YOU LIKE TO DO</option>
                    <option value="sellmyproperty">SELL MY PROPERTY</option>
                    <option value="letmyproperty">LET MY PROPERTY</option>
                    <option value="justcurious">JUST CURIOUS</option>
                    <option value="remortgaging">REMORTGAGING / RENOVATION / PURCHASING</option>
                </select>
                <select className='inp' name='sellproperty' onChange={handleInputChange} value={formData.sellproperty}  >
                {/* // onChange={(e) => setFormData({ ...formData, sellproperty: e.target.value })}> */}
                    <option value="" disabled>WHEN WOULD YOU LIKE TO SELL PROPERTY</option>
                    <option value="0-3months">0 - 3 MONTHS</option>
                    <option value="3-6months">3 - 6 MONTHS</option>
                    <option value="6+months">6+ MONTHS</option>
                </select>
                
                <input className='inp' onChange={handleInputChange} value={formData.message} name='message' type="text" placeholder="MESSAGE (OPTIONAL)" /><br/>
                <select className='inp' value={formData.contact} onChange={handleInputChange} name='contact' >
                {/* //  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}> */}
                    <option value="" disabled>BEST WAY TO CONTACT YOU (OPTIONAL)</option>
                    <option value="email">EMAIL</option>
                    <option value="phone">PHONE</option>
                    <option value="either">EITHER</option>
                </select>
                <select className='inp' name='besttime' onChange={handleInputChange} value={formData.besttime} >
                {/* //  onChange={(e) => setFormData({ ...formData, besttime: e.target.value })}> */}
                    <option value="" disabled>BEST TIME TO CONTACT YOU (OTIPNAL)</option>
                    <option value="morning">MORNING</option>
                    <option value="afternoon">AFTERNOON</option>
                    <option value="evening">EVENING</option>
                    <option value="anytime">ANY TIME</option>
                </select>
                <center className='bb1'>
                    <button className='' onClick={submitForm}>SUMBIT</button>
                </center>
            </div>
            
        </div>
        </center>
    </div>
  )
}



export default Valuemyhome
