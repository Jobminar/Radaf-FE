import React, { useState } from 'react';
import "./leins.css";
import sada from "./sampletabdata.js";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Pageundercuntruction from './Pageundercuntruction.js';
import Underconstruction from "./Pageundercuntruction.js"
import { useNavigate } from 'react-router-dom';

const Lettedinspection = () => {
  const navigate=useNavigate()
  const [activeTab, setActiveTab] = useState('Future Inspection');
  const [rescheduleDates, setRescheduleDates] = useState(sada.map(() => null));


  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const under=()=>{
    navigate("/underconstruction")
      }
  const handleDateChange = (date, index) => {
    const updatedDates = [...rescheduleDates];
    updatedDates[index] = date;
    setRescheduleDates(updatedDates);
  };

  return (
    <div className='maincoos'>
      <h1>My Properties Letted Properties Inspection</h1>
      <div className='cal'>
        <button
        //   style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
        style={{paddingRight:"30px",marginTop:"20px",marginRight:"20px",marginBottom:"20px",fontSize:"20px"}}
          className={activeTab === 'Future Inspection' ? 'active-' : 'bb'}
          onClick={() => handleTabClick('Future Inspection')}
        >
          Future Inspection
        </button>
        <button
        //   style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
        // style={{border:"none"}}
        style={{paddingRight:"30px",marginTop:"20px",marginBottom:"20px",fontSize:"20px"}}
          className={activeTab === 'Past Inspection' ? 'active-' : 'bb'}
          onClick={() => handleTabClick('Past Inspection')}
        >
          Past Inspection
        </button>
        <div style={{ display: activeTab === 'Future Inspection' ? 'block' : 'none' }}>
          {/* Future Inspection Table */}
          <div>
            <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Schedule Details</th>
                  <th>Date</th>
                  <th>Time</th>
                  {activeTab === 'Future Inspection' && <th>Reschedule</th>}
                  <th>Agent Details</th>
                </tr>
              </thead>
              <tbody>
                {sada.map((item,index) => (
                  <tr key={item.SNo}>
                    <td>{item.SNo}</td>
                    <td>{item.Scheduledetails}</td>
                    <td>{item.Date}</td>
                    <td>{item.time}</td>
                    <td>{activeTab === 'Future Inspection' ? (
                        <DatePicker 
                          selected={rescheduleDates[index]}
                          onChange={(date) => handleDateChange(date, index)}
                          showTimeSelect
                          placeholderText="Click and reschedule"
                          dateFormat="MMMM d, yyyy h:mm aa"
                          className="custom-datepicker"
                        />
                      ) : null}</td>
                    {/* {activeTab === 'Future Inspection' && <td>{item.reschedule}</td>} */}
                    <td>{item.agentdetails}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='inp2d' style={{ display: activeTab === 'Past Inspection' ? 'block' : 'none' }}>
          {/* Past Inspection Table */}
          <div>
            <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Schedule Details</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Agent Details</th>
                  {activeTab === 'Past Inspection' && <th>Download Inspection</th>}
                </tr>
              </thead>
              <tbody>
                {sada.map((item) => (
                  <tr key={item.SNo}>
                    <td>{item.SNo}</td>
                    <td>{item.Scheduledetails}</td>
                    <td>{item.Date}</td>
                    <td>{item.time}</td>
                    <td>{item.agentdetails}</td>
                    {activeTab === 'Past Inspection' && <td ><FileDownloadIcon onClick={(under)} /></td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lettedinspection;
