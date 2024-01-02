import React,{useState} from 'react'
import "./Valuemyhome.css"




const Valuemyhome = () => {
    const [activeTab, setActiveTab] = useState('Instant Valuation');
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    return (
    <div className='maincoos'>
        <center className='mainco'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator calimage" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>
                {activeTab==="Instant Valuation"?(
                    <><h1>Arrange a free agent valuation</h1>
                    <p>The simple, free, no-obligation way to request an accurate valuation of your home from estate and letting agents who are experts in your local areas</p></>
                ):(<>
                <h1>Agent online valuation</h1>
                <p>Enter your postcode and answer a few simple questions to instantly get an estimate of your home's value</p></>)}
            </div>
        
        </center>
        <div className='cal'>
            <button className={activeTab==="Instant Valuation"?'active-tab':""} onClick={() => handleTabClick('Instant Valuation')}>Instant Valuation</button>
            <button className={activeTab==="Agent Valuation"?'active-tab':""} onClick={() => handleTabClick('Agent Valuation')}>Agent Valuation</button>
            <div style={{ display: activeTab === 'Instant Valuation' ? 'block' : 'none' }}>
                <input className='inp' type="text" placeholder="Enter Your Postcode" /><br/>
                <input className='inp' type="text" placeholder="Address" /><br/>
                <select className='inp' defaultValue="" onChange={(e) => console.log(e.target.value)}>
                    <option value="" disabled>Purpose of Valuation</option>
                    <option value="input3_1">Letting your Property</option>
                    <option value="input3_2">selling your Property</option>
                </select>
                <center>
                    <button className='bbut'>Next</button>
                </center>
            </div>
            <div className='inp2d' style={{ display: activeTab === 'Agent Valuation' ? 'block' : 'none' }}>
                <input className='inp2' type="text" placeholder="Input" />
                <button className='inp2b'>search</button>
            </div>
        </div>
    </div>
  )
}

export default Valuemyhome
