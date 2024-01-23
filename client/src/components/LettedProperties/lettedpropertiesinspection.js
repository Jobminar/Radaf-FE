import React, { useState } from 'react';
import "./leins.css";
import sada from "./sampletabdata.js";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Lettedinspection = () => {
  const [activeTab, setActiveTab] = useState('Future Inspection');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
                  {activeTab === 'Future Inspection' && <th>Download</th>}
                </tr>
              </thead>
              <tbody>
                {sada.map((item) => (
                  <tr key={item.SNo}>
                    <td>{item.SNo}</td>
                    <td>{item.Scheduledetails}</td>
                    <td>{item.Date}</td>
                    <td>{item.time}</td>
                    {activeTab === 'Future Inspection' && <td>{item.reschedule}</td>}
                    <td>{item.agentdetails}</td>
                    {activeTab === 'Future Inspection' && <td><FileDownloadIcon/></td>}
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
                    {activeTab === 'Past Inspection' && <td><FileDownloadIcon/></td>}
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
