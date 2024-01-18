import React, { useState } from 'react'
import sampled from "./sampled.js";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Lettedbill = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelect = (option) => {
        setSelectedOption(option);
      };
      const options = [
        'bill',
        'documents'
      ];
  return (
    <div style={{margin:"3%"}}>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginBottom:"20px"}}>
          <h1 style={{paddingTop:"10px"}}>Sort By</h1>
        <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)} style={{ background: "#BE6B2E",marginLeft:"25px",color:"white", border: "none", width: "180px", padding: "20px", fontSize: "18px",borderRadius:"20px",marginTop:"20px" }}
      >
        <option value="">Bills and Documents</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
        </div>
        <div>
            <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Month</th>
                  <th>Gas</th>
                  <th>Electric</th>
                  {/* {activeTab === 'Future Inspection' && <th>Reschedule</th>} */}
                  <th>Water</th>
                  <th>Council Tax</th>
                  <th>Rental Invoice</th>
                  <th>Upload</th>
                  <th>Status</th>
                  <th>View</th>
                  {/* {activeTab === 'Future Inspection' && <th>Download</th>} */}
                </tr>
              </thead>
              <tbody>
                {sampled.map((item) => (
                  <tr key={item.SNo}>
                    <td>{item.SNo}</td>
                    <td>{item.Month}</td>
                    <td>{item.Gas}</td>
                    <td>{item.Electric}</td>
                    {/* {activeTab === 'Future Inspection' && <td>{item.reschedule}</td>} */}
                    <td>{item.Water}</td>
                    <td>{item.CouncilTax}</td>
                    <td>{item.RentalInvoice}</td>
                    <td><FileUploadIcon/></td>
                    <td>{item.Status}</td>
                    <td><RemoveRedEyeIcon/></td>
                    {/* {activeTab === 'Future Inspection' && <td><FileDownloadIcon/></td>} */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default Lettedbill